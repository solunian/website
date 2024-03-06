<script lang="ts">
  import { onMount } from "svelte";
  import type { PageData } from "./$types";
  import type { ItemID, Item } from "./types";
  import Story from "./Story.svelte";
  import Link from "$lib/components/Link.svelte";
  import { page } from "$app/stores";

  export let data: PageData;

  enum Status {
    Loading,
    Success,
    Failed,
  }

  let fetch_status: Status = Status.Loading;
  let item_list: Item[] = [];

  const fetch_data = async () => {
    try {
      const item_id_list: ItemID[] = await (await fetch(data.fetch_url)).json();

      const item_promises = item_id_list
        .slice(0, 30)
        .map((id) => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`));

      const item_responses = await Promise.all(item_promises);
      item_list = await Promise.all(item_responses.map(async (res) => await res.json()));

      fetch_status = Status.Success;
    } catch (err) {
      fetch_status = Status.Failed;
    }
  };

  onMount(fetch_data);
</script>

<svelte:head>
  <title>Daniel's Hacker News</title>
</svelte:head>

<div
  class="flex flex-row justify-center gap-1 bg-yellow-300 py-1 font-sans dark:bg-yellow-600 dark:text-white">
  status:
  {#if fetch_status === Status.Loading}
    <div>loading</div>
  {:else if fetch_status === Status.Success}
    <div>success</div>
  {:else if fetch_status === Status.Failed}
    <div>failed</div>
  {/if}
</div>

{#if fetch_status === Status.Success}
  <!-- WRAPPER FOR CENTERING -->
  <div class="flex flex-row bg-zinc-200 lg:justify-center dark:bg-zinc-950">
    <div
      class="flex flex-col border-x-2 border-zinc-300 bg-zinc-100 px-4 py-4 sm:mx-10 md:mx-20 md:px-8 lg:mx-0 lg:w-[60rem] dark:border-zinc-800 dark:bg-zinc-900">
      <header class="flex flex-col items-center gap-1 sm:items-start">
        <nav class="flex flex-row items-baseline gap-4">
          <Link href="/">home</Link>
          <!-- weird thingy to get Link component to target: self -->
          <Link href={$page.url.pathname + $page.url.search}>reload</Link>
          <Link href="https://news.ycombinator.com">origin</Link>
        </nav>

        <h1 class="font-mono text-5xl sm:text-6xl">Hacker News</h1>
        <h2 class="font-mono text-orange-600 sm:pl-8">from Y Combinator</h2>
      </header>

      {#if item_list !== undefined}
        <div class="my-4 flex flex-col gap-0.5 text-lg sm:gap-2 sm:text-xl">
          {#each item_list as item}
            <Story {item} />
          {/each}
        </div>
      {/if}
    </div>
  </div>
{/if}

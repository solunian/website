<script lang="ts">
  import { onMount } from "svelte";
  import type { ItemID, Item } from "./types";
  import Story from "./Story.svelte";
  import Select from "./Select.svelte";
  import Link from "$lib/components/Link.svelte";
  import moment from "moment";

  enum Status {
    Loading,
    Success,
    Failed,
  }

  let fetch_status: Status = Status.Loading;
  let item_list: Item[] = [];
  let last_fetch_moment = moment();
  let last_fetch_timestamp: string =
    last_fetch_moment.format("MMM Do, YYYY ~ ") + last_fetch_moment.fromNow();

  let filter_values = ["top", "best", "new"];
  let filter: string = filter_values[0]; // global variable basically

  $: {
    filter; // trigger reactivity
    fetch_data();
  }

  // updating timestamp every second even though it won't change that much lol
  setInterval(() => {
    last_fetch_timestamp =
      last_fetch_moment.format("MMM Do, YYYY ~ ") + last_fetch_moment.fromNow();
  }, 1000);

  const fetch_data = async () => {
    const get_filter_url = (query_param: string): string => {
      if (query_param === "top") {
        return "https://hacker-news.firebaseio.com/v0/topstories.json";
      } else if (query_param === "new") {
        return "https://hacker-news.firebaseio.com/v0/newstories.json";
      } else if (query_param === "best") {
        return "https://hacker-news.firebaseio.com/v0/beststories.json";
      } else {
        // top is default
        return "https://hacker-news.firebaseio.com/v0/topstories.json";
      }
    };

    try {
      fetch_status = Status.Loading;

      const fetch_url = get_filter_url(filter);
      const item_id_list: ItemID[] = await (await fetch(fetch_url)).json();

      const item_promises = item_id_list
        .slice(0, 30)
        .map((id) => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`));

      const item_responses = await Promise.all(item_promises);
      item_list = await Promise.all(item_responses.map(async (res) => await res.json()));

      // resetting timestamp moment
      last_fetch_moment = moment();

      fetch_status = Status.Success;
    } catch {
      fetch_status = Status.Failed;
    }
  };

  onMount(() => {
    fetch_data();
  });
</script>

<svelte:head>
  <title>Daniel's Hacker News</title>

  <meta name="description" content="An aesthetic wrapper for Y Combinator's Hacker News." />

  <meta name="og:title" content="Daniel's Hacker News" />
  <meta name="og:description" content="An aesthetic wrapper for Y Combinator's Hacker News." />
  <meta name="og:url" content="https://solunian.dev/news" />

  <meta name="twitter:title" content="Daniel's Hacker News" />
  <meta name="twitter:url" content="https://solunian.dev/news" />
  <meta name="twitter:description" content="An aesthetic wrapper for Y Combinator's Hacker News." />
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

<!-- WRAPPER FOR CENTERING -->
<div class="flex min-h-screen flex-row bg-zinc-200 lg:justify-center dark:bg-zinc-950">
  <div
    class="flex w-full flex-col border-x-2 border-zinc-300 bg-zinc-100 px-4 py-4 sm:mx-10 md:mx-20 md:px-8 lg:mx-0 lg:w-[60rem] dark:border-zinc-800 dark:bg-zinc-900">
    <header class="flex flex-col items-center sm:items-start">
      <div class="flex flex-row items-baseline gap-4 sm:gap-20">
        <nav class="flex flex-row items-baseline gap-4">
          <Link href="/">home</Link>
          <button on:click={fetch_data}><Link>refetch</Link></button>
          <Link href="https://news.ycombinator.com">origin</Link>
        </nav>

        <Select bind:value={filter} values={filter_values} />
      </div>

      <h3 class="pt-2 font-mono text-lg text-zinc-500 dark:text-zinc-400">
        {last_fetch_timestamp}
      </h3>
      <h1 class="font-mono text-5xl sm:text-6xl">Hacker News</h1>
      <h2 class="font-mono text-2xl text-orange-600 sm:pl-8 dark:text-orange-500">
        from Y Combinator
      </h2>
    </header>

    {#if fetch_status === Status.Success}
      {#if item_list !== undefined}
        <div class="my-4 flex flex-col gap-0.5 text-lg sm:gap-2 sm:text-xl">
          {#each item_list as item, index}
            <div class="flex flex-row">
              <Story {index} {item} />
            </div>
          {/each}
        </div>
      {/if}
    {/if}
  </div>
</div>

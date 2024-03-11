<script lang="ts">
  import { onMount } from "svelte";
  import type { ItemID, Item } from "./types";
  import Story from "./Story.svelte";
  import Select from "./Select.svelte";
  import Link from "$lib/components/Link.svelte";
  import moment from "moment";
  import { fade } from "svelte/transition";

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
  const update_timestamp = () =>
    (last_fetch_timestamp =
      last_fetch_moment.format("MMM Do, YYYY ~ ") + last_fetch_moment.fromNow());

  let filter_values = ["top", "best", "new"];
  let filter: string = filter_values[0]; // global variable basically

  $: {
    filter; // trigger reactivity
    fetch_data();
  }

  // updating timestamp every second even though it won't change that much lol
  setInterval(update_timestamp, 1000);

  const fetch_data = async () => {
    const get_filter_url = (filter_value: string): string => {
      if (filter_value === "top") {
        return "https://hacker-news.firebaseio.com/v0/topstories.json";
      } else if (filter_value === "new") {
        return "https://hacker-news.firebaseio.com/v0/newstories.json";
      } else if (filter_value === "best") {
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
      update_timestamp();

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

<!-- top loading bar for deving -->
<!-- <div
  class="flex flex-row justify-center gap-1 bg-yellow-300 py-1 font-sans dark:bg-yellow-600 dark:text-white">
  status:
  {#if fetch_status === Status.Loading}
    <div>loading</div>
  {:else if fetch_status === Status.Success}
    <div>success</div>
  {:else if fetch_status === Status.Failed}
    <div>failed</div>
  {/if}
</div> -->

<!-- WRAPPER FOR CENTERING -->
<div class="flex flex-grow flex-row bg-zinc-200 dark:bg-zinc-950 lg:justify-center">
  <div
    class="flex w-full flex-col border-x-2 border-zinc-300 bg-zinc-100 px-4 py-4 dark:border-zinc-800 dark:bg-zinc-900 sm:mx-10 md:mx-20 md:px-8 lg:mx-0 lg:w-[60rem]">
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
      <h2 class="font-mono text-2xl text-orange-600 dark:text-orange-500 sm:pl-8">
        from Y Combinator
      </h2>
    </header>

    {#if fetch_status === Status.Loading}
      <div class="relative mt-24 flex w-full flex-col items-center" in:fade={{ duration: 200 }}>
        <div
          class="absolute top-12 font-sans text-3xl text-pink-900 sm:top-16 sm:text-4xl md:top-20 md:text-5xl">
          loading...
        </div>
        <img
          src="/website/nyan_cat_kawaii.gif"
          alt="nyan cat gif"
          class="w-64 rounded-xl sm:w-80 md:w-96" />
      </div>
    {:else if fetch_status === Status.Success}
      {#if item_list !== undefined}
        <div class="my-4 flex flex-col gap-0.5 text-lg sm:gap-2 sm:text-xl">
          {#each item_list as item, index}
            <div class="flex flex-row">
              <Story {index} {item} />
            </div>
          {/each}
        </div>
      {/if}
    {:else if fetch_status === Status.Failed}
      <div class="mt-24 flex w-full flex-col items-center">
        <div class="relative">
          <button
            on:click={fetch_data}
            class="absolute right-1 top-0 translate-y-1 rounded-lg p-1 transition hover:bg-zinc-950/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="h-8 w-8">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </button>
          <div class="absolute bottom-2 right-2 font-sans text-4xl text-red-700">failed.</div>
          <img src="/website/polite_cat.jpg" alt="polite cat" class="w-96 rounded-xl" />
        </div>
      </div>
    {/if}
  </div>
</div>

<footer
  class="flex flex-row justify-center border-2 border-zinc-300 bg-zinc-200 pb-4 pt-2 font-mono text-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-700">
  about.
</footer>

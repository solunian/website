<script lang="ts">
  import type { ItemID, Item } from "./types";
  import Story from "./story.svelte";
  import Select from "./select.svelte";
  import Link from "$lib/components/link.svelte";
  import moment from "moment";
  import { fade } from "svelte/transition";
  import About from "./about.svelte";
  import FeedNavigation from "./feed-navigation.svelte";

  enum Status {
    Loading,
    Success,
    Failed,
  }

  let fetch_status: Status = $state(Status.Loading);
  let item_list: Item[] = $state([]);
  let last_fetch_moment = moment();
  let last_fetch_timestamp: string = $state(
    last_fetch_moment.format("MMM Do, YYYY ~ ") + last_fetch_moment.fromNow()
  );
  const update_timestamp = () =>
    (last_fetch_timestamp =
      last_fetch_moment.format("MMM Do, YYYY ~ ") + last_fetch_moment.fromNow());

  let filter_values = ["top", "best", "new"];
  let filter: string = $state(filter_values[0]); // global variable basically

  $effect(() => {
    fetch_data();
  });
  // updating timestamp every second even though it won't change that much lol
  setInterval(update_timestamp, 1000);

  let item_list_start = $state(0); // inclusive
  let item_list_end = 30; // exclusive
  let item_id_list: ItemID[];
  const update_item_list = async (offset: number) => {
    // -inf and +inf to get to start or end of list
    if (item_list_start + offset < 0 || offset === Number.NEGATIVE_INFINITY) {
      item_list_start = 0;
      item_list_end = 30;
    } else if (
      item_list_end + offset > item_id_list.length ||
      offset === Number.POSITIVE_INFINITY
    ) {
      item_list_start = item_id_list.length - 30;
      item_list_end = item_id_list.length;
    } else {
      item_list_start += offset;
      item_list_end += offset;
    }
    try {
      fetch_status = Status.Loading;

      const item_promises = item_id_list
        .slice(item_list_start, item_list_end)
        .map((id) => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`));

      const item_responses = await Promise.all(item_promises);
      item_list = await Promise.all(item_responses.map(async (res) => await res.json()));

      // resetting timestamp moment ... no need to update timestamp because new lists not fetched
      // last_fetch_moment = moment();
      // update_timestamp();

      fetch_status = Status.Success;
    } catch {
      fetch_status = Status.Failed;
    }
  };

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

  const fetch_data = async () => {
    try {
      fetch_status = Status.Loading;

      const fetch_url = get_filter_url(filter);
      item_id_list = await (await fetch(fetch_url)).json();
      if (item_id_list.length < item_list_end) {
        item_list_end = item_id_list.length;
      }

      const item_promises = item_id_list
        .slice(item_list_start, item_list_end)
        .map((id) => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`));

      const item_responses = await Promise.all(item_promises);
      item_list = await Promise.all(item_responses.map(async (res) => await res.json()));

      // resetting timestamp moment
      last_fetch_moment = moment();
      update_timestamp();

      // change indexes to default whenever refetch
      item_list_start = 0;
      item_list_end = 30;

      fetch_status = Status.Success;
    } catch {
      fetch_status = Status.Failed;
    }
  };
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
<div class="flex grow flex-row bg-zinc-200 lg:justify-center dark:bg-zinc-950">
  <div
    class="flex w-full flex-col border-x-2 border-zinc-300 bg-zinc-100 px-4 py-4 sm:mx-10 md:mx-20 md:px-8 lg:mx-0 lg:w-[60rem] dark:border-zinc-800 dark:bg-zinc-900">
    <header class="flex flex-col items-center sm:items-start">
      <div class="flex flex-row items-baseline gap-4 sm:gap-20">
        <nav class="flex flex-row items-baseline gap-4">
          <Link href="/">home</Link>
          <button onclick={fetch_data}><Link>refetch</Link></button>
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

    {#if fetch_status === Status.Loading}
      <div class="relative mt-24 flex w-full flex-col items-center" in:fade={{ duration: 200 }}>
        <div
          class="absolute top-12 font-sans text-3xl text-zinc-800 sm:top-16 sm:text-4xl md:top-20 md:text-5xl">
          loading...
        </div>
        <img
          src="/website/improved_nyan.avif"
          alt="nyan cat"
          class="w-64 rounded-xl sm:w-80 md:w-96" />
      </div>
    {:else if fetch_status === Status.Success}
      {#if item_list !== undefined}
        <div class="my-4 flex flex-col gap-0.5 text-lg sm:gap-2 sm:text-xl">
          {#each item_list as item, index}
            <div class="flex flex-row">
              <Story index={item_list_start + index} {item} />
            </div>
          {/each}
        </div>

        <FeedNavigation
          farleft={() => {
            update_item_list(Number.NEGATIVE_INFINITY);
          }}
          left={() => {
            update_item_list(-30);
          }}
          right={() => {
            update_item_list(30);
          }}
          farright={() => {
            update_item_list(Number.POSITIVE_INFINITY);
          }} />
      {/if}
    {:else if fetch_status === Status.Failed}
      <div class="mt-24 flex w-full flex-col items-center">
        <div class="relative">
          <button
            aria-label="refetch"
            onclick={fetch_data}
            class="absolute top-0 right-1 translate-y-1 rounded-lg p-1 transition hover:bg-zinc-950/20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="h-8 w-8 stroke-white">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
          </button>
          <div class="absolute right-2 bottom-2 font-sans text-4xl text-red-700">failed.</div>
          <img src="/website/polite_cat.avif" alt="polite cat" class="w-96 rounded-xl" />
        </div>
      </div>
    {/if}
  </div>
</div>

<footer
  class="flex flex-row justify-center border-2 border-zinc-300 bg-zinc-200 pt-2 pb-4 font-mono text-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-700">
  <About />
</footer>

<script lang="ts">
  import { slide } from "svelte/transition";
  import moment from "moment";
  import Title from "./Title.svelte";
  import Link from "$lib/components/Link.svelte";
  import type { Item } from "./types";

  interface Props {
    item: Item;
    index: number;
  }

  let { item, index }: Props = $props();

  const def = (val: number | string | undefined) => val !== undefined;

  let is_text_open = $state(false);
</script>

<div class="flex flex-row p-1">
  <span class="pr-2">{index + 1}. </span>
  <div class="flex flex-col gap-1">
    <div class="flex flex-row items-center gap-2">
      <Title title={item.title} url={item.url} />

      {#if def(item.text)}
        <button class="font-mono text-green-600" onclick={() => (is_text_open = !is_text_open)}
          >{"<text>"}</button>
      {/if}
    </div>

    <div class="mb-2 flex flex-row items-center gap-4 text-base">
      {#if def(item.by)}
        <span
          >by <Link href={`https://news.ycombinator.com/user?id=${item.by}`}>{item.by}</Link></span>
      {/if}

      {#if def(item.time)}
        <span class="text-zinc-500 dark:text-zinc-400">{moment(item.time, "X").fromNow()}</span>
      {/if}

      <span class="hidden sm:inline">
        {#if def(item.descendants) && (item.descendants ?? 0) > 0}
          <Link href={`https://news.ycombinator.com/item?id=${item.id}`}>
            <span class="font-mono text-orange-600 dark:text-orange-500">
              {`${item.descendants} comment${item.descendants != 1 ? "s" : ""}`}
            </span>
          </Link>
        {/if}
      </span>
    </div>

    {#if def(item.text) && is_text_open}
      <div
        id="text"
        transition:slide
        class="rounded-lg bg-zinc-200 px-3 py-2 text-sm text-wrap sm:px-5 sm:py-3 sm:text-base dark:bg-zinc-800">
        {@html item.text}
      </div>
    {/if}
  </div>
</div>

<style>
  @import "tailwindcss/theme" theme(reference);

  #text :global(a) {
    @apply rounded break-all whitespace-break-spaces text-black underline decoration-zinc-400 transition hover:bg-zinc-300 dark:text-white dark:decoration-zinc-500 dark:hover:bg-zinc-700;
  }

  #text :global(p) {
    @apply py-2.5;
  }
</style>

<script lang="ts">
  import { slide } from "svelte/transition";
  import Title from "./Title.svelte";
  import type { Item } from "./types";

  export let item: Item;

  const is_def = (val: any) => val !== undefined;

  let is_text_open = false;
</script>

<div class="p-1 text-left">
  <div class="flex flex-row items-center gap-2">
    <Title title={item.title} url={item.url} />

    {#if is_def(item.text)}
      <button class="font-mono text-green-600" on:click={() => (is_text_open = !is_text_open)}
        >{"<text>"}</button>
    {/if}
  </div>

  {#if is_def(item.text)}
    {#if is_text_open}
      <div
        id="text"
        transition:slide
        class="my-2 rounded-lg bg-zinc-200 px-3 py-2 text-sm sm:px-5 sm:py-3 sm:text-base dark:bg-zinc-800">
        {@html item.text}
      </div>
    {/if}
  {/if}
</div>

<style lang="postcss">
  #text :global(a) {
    @apply whitespace-break-spaces rounded text-black underline decoration-zinc-400 transition hover:bg-zinc-300 dark:text-white dark:decoration-zinc-500 dark:hover:bg-zinc-700;
  }

  #text :global(p) {
    @apply py-2.5;
  }
</style>

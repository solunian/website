<script lang="ts">
  import type { Snippet } from "svelte";
  import { fade, slide } from "svelte/transition";

  let { title, children }: { title: string; children: Snippet } = $props();

  let is_open = $state(false);
</script>

<div class="rounded-lg border-2 border-zinc-200 bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800">
  <button
    onclick={() => (is_open = !is_open)}
    class="flex w-full items-center justify-between p-4 text-left text-black dark:text-white">
    <span>{title}</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      class={["size-5 transition duration-200", is_open && "rotate-180"]}>
      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  </button>

  {#if is_open}
    <div
      transition:slide={{ duration: 200 }}
      class="flex w-full max-w-full flex-col gap-4 px-4 pb-4">
      <hr transition:fade class="rounded-full border-1 border-zinc-300 dark:border-zinc-700" />
      {@render children()}
    </div>
  {/if}
</div>

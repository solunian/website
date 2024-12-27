<script lang="ts">
  import { fade } from "svelte/transition";

  let modal: HTMLDialogElement;

  const open = () => {
    modal.showModal();
  };
  const close = () => {
    modal.close();
  };
</script>

<dialog bind:this={modal} class="bg-transparent">
  <button
    aria-label="background modal close"
    class="fixed left-0 top-0 -z-10 h-full w-full cursor-default"
    on:click={close}
    tabindex="-1"
    transition:fade={{ duration: 200 }}></button>

  <div
    class="w-full rounded-xl border-2 border-zinc-300 bg-zinc-100 p-3 font-sans sm:w-[36rem] dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-300">
    <button
      aria-label="x modal close"
      class="absolute right-2 top-2 z-10 stroke-zinc-900 opacity-50 transition hover:opacity-75"
      on:click={close}
      transition:fade={{ duration: 200 }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="h-10 w-10">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <div class="flex flex-col gap-4 font-normal">
      <h1 class="text-3xl underline">about</h1>

      <p class="text-lg">
        Hi, Daniel here! This is an aesthetic wrapper for Y Combinator's Hacker News. I just wanted
        to have a nice way to check coding news, and it only took a week.
      </p>

      <p class="text-lg">
        <span class="font-bold italic">news filters:</span> "top" are typically new/upvoted stories,
        "best" are upvoted stories from a longer time period (around a couple days), and "new" are most
        recently posted stories.
      </p>

      <p class="text-lg">
        The time is when the currently shown stories were fetched. Click refetch at the top to
        update the feed!
      </p>
    </div>
  </div>
</dialog>

<button on:click={open}>about.</button>

<style>
  ::backdrop {
    @apply bg-zinc-900 opacity-75;
  }
</style>

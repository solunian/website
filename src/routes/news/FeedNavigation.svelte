<script lang="ts">
  import type { MouseEventHandler } from "svelte/elements";

  export let farleft: MouseEventHandler<HTMLButtonElement>;
  export let left: MouseEventHandler<HTMLButtonElement>;
  export let right: MouseEventHandler<HTMLButtonElement>;
  export let farright: MouseEventHandler<HTMLButtonElement>;
</script>

<div class="flex flex-row justify-center">
  <div
    class="group flex flex-row items-center rounded-3xl border-2 border-zinc-300 bg-zinc-100 transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 hover:dark:border-zinc-700">
    <button
      class="rounded-l-3xl border-r-2 border-zinc-300 px-3 py-1 transition hover:bg-zinc-200 group-hover:border-zinc-400 dark:border-zinc-800 hover:dark:bg-zinc-800 group-hover:dark:border-zinc-700"
      on:click={farleft}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
      </svg>
    </button>
    <button
      class=" border-r-2 border-zinc-300 px-3 py-1 transition hover:bg-zinc-200 group-hover:border-zinc-400 dark:border-zinc-800 hover:dark:bg-zinc-800 group-hover:dark:border-zinc-700"
      on:click={left}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
      </svg>
    </button>
    <button
      class="border-r-2 border-zinc-300 px-3 py-1 transition hover:bg-zinc-200 group-hover:border-zinc-400 dark:border-zinc-800 hover:dark:bg-zinc-800 group-hover:dark:border-zinc-700"
      on:click={right}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
      </svg>
    </button>
    <button
      class="rounded-r-3xl px-3 py-1 transition hover:bg-zinc-200 hover:dark:bg-zinc-800"
      on:click={farright}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="h-6 w-6">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
      </svg>
    </button>
  </div>
</div>

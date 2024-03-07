<script lang="ts">
  import { fade } from "svelte/transition";

  let is_open: boolean = false;

  let current_index: number = 0;
  export let values: string[];
  export let value: string;
  $: value = values[current_index];

  const handle_open = () => {
    is_open = !is_open;
  };
  const handle_select = (index: number) => {
    current_index = index;
    is_open = false;
  };

  let element: HTMLDivElement;
</script>

<!-- will force a click away to close -->
{#if is_open}
  <button class="absolute inset-0 cursor-default" on:click={() => (is_open = false)} />
{/if}

<div class="relative flex flex-col font-mono text-lg">
  <button
    class="flex w-[5.5rem] flex-row items-center rounded-lg border border-zinc-400 bg-zinc-300 px-2 transition hover:border-zinc-500 dark:border-zinc-800 dark:bg-zinc-950 dark:hover:border-zinc-700"
    on:click={handle_open}>
    {values[current_index]}

    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="ml-auto inline h-5 w-5">
      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  </button>

  {#if is_open}
    <div
      transition:fade={{ duration: 100 }}
      class="absolute top-[110%] flex flex-col rounded-lg border border-zinc-300 bg-zinc-300/30 backdrop-blur dark:border-zinc-950 dark:bg-zinc-950/20">
      {#each values as current_value, index}
        <button
          class="flex w-[5.5rem] flex-row items-center px-2 transition first:rounded-t-lg last:rounded-b-lg hover:bg-zinc-400/30 dark:hover:bg-zinc-500/20"
          on:click={() => handle_select(index)}>
          {#if index === current_index}
            {current_value}

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="ml-auto inline h-5 w-5">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
            </svg>
          {:else}
            {current_value}
          {/if}
        </button>
      {/each}
    </div>
  {/if}
</div>

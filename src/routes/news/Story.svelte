<script lang="ts">
  import type { Item } from "./types";

  export let item: Item;

  const is_def = (val: any) => val !== undefined;
</script>

<div class="border-y p-1">
  <h1 class="flex flex-row gap-2">
    {#if is_def(item.title)}
      {item.title}
    {:else}
      {"[untitled story]"}
    {/if}

    {#if is_def(item.url)}
      <a href={item.url} target="_blank"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="inline h-6 w-6 -translate-y-0.5">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
        </svg>
      </a>
    {/if}
  </h1>

  {#if is_def(item.text)}
    <p class="text-sm">{@html item.text}</p>
  {/if}
</div>

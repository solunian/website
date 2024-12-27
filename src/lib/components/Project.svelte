<script lang="ts">
  import type { Snippet } from "svelte";
  import Link from "./Link.svelte";

  interface Props {
    title: string;
    link?: string;
    github_link?: string;
    starred?: boolean;
    children?: Snippet;
  }

  let { title, link, github_link, starred = false, children }: Props = $props();
</script>

<div>
  <h3 class="inline">
    {#if link !== undefined}
      <Link href={link}>
        <span class="font-medium">{title}</span>
      </Link>
    {:else}
      <span class="font-medium text-black dark:text-white">{title}</span>
    {/if}

    {#if starred}
      <button id="tooltip-target" class="cursor-default">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          stroke-width="2"
          stroke="currentColor"
          class="inline h-5 w-5 -translate-y-0.5 fill-yellow-300 stroke-yellow-400">
          <path
            fill-rule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clip-rule="evenodd" />
        </svg>

        <span id="tooltip" class="pointer-events-none font-mono text-base"> extra cool! </span>
      </button>
    {:else}
      ·
    {/if}
  </h3>

  {@render children?.()}

  {#if github_link !== undefined}
    <a
      href={github_link}
      target="_blank"
      aria-label="github link"
      class="inline rounded-lg px-1 text-green-600 transition hover:bg-zinc-200 dark:hover:bg-zinc-700">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="inline h-5 w-5 -translate-y-0.5">
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    </a>
  {/if}
</div>

<style lang="postcss">
  #tooltip-target {
    @apply relative;
  }

  #tooltip::after {
    content: "";
    transform: translate(-50%, 170%);
    @apply absolute left-1/2 top-0 z-10 block w-0 border-8 border-transparent border-t-black dark:border-t-yellow-400;
  }

  #tooltip {
    /* transform: translate(-59%, -120%); */
    @apply invisible absolute -left-12 -top-[36px] z-10 whitespace-nowrap rounded-md bg-black px-2 py-0.5 text-center text-white opacity-0 transition dark:bg-yellow-400 dark:text-black;
  }

  #tooltip-target:hover > #tooltip {
    @apply visible opacity-100;
  }
</style>

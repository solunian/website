<script lang="ts">
  import Link from "./Link.svelte";

  export let title: string;
  export let link: string;
  export let starred: boolean = false;
</script>

<div>
  <h3 class="inline">
    <Link href={link}>
      <span class="font-semibold">{title}</span>
    </Link>

    {#if starred}
      <button id="tooltip-target">
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

  <slot />
</div>

<style>
  #tooltip::after {
    content: "";
    transform: translate(-50%, 170%);
    @apply absolute left-1/2 top-0 z-10 block w-0 border-8 border-transparent border-t-black;
  }

  #tooltip {
    transform: translate(-59%, -120%);
    @apply invisible absolute z-10 whitespace-nowrap rounded-md bg-black px-2 py-0.5 text-center text-white;
  }

  #tooltip-target:hover > #tooltip {
    @apply visible;
  }
</style>

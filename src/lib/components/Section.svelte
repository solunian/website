<script lang="ts">
  import Link from "./Link.svelte";

  export let id: string;
  export let name: string | null = null;
  export let see_more: string | null = null;
  export let see_more_href: string | null = null;

  const rainbow_colors: string[] = [
    "text-red-500",
    "text-orange-500",
    "text-yellow-500",
    "text-green-500",
    "text-blue-500",
    "text-indigo-500",
    "text-violet-500",
  ];
  let color_idx = Math.floor(Math.random() * rainbow_colors.length);

  setInterval(() => color_idx++, 100);
</script>

<section class="my-2">
  <div class="mb-6 mt-4 flex flex-row items-baseline justify-between">
    <h2 {id} class="font-mono text-3xl font-bold">
      {#each (name ?? id).split("") as letter, idx}
        <span class={rainbow_colors[(color_idx + idx) % rainbow_colors.length]}>{letter}</span>
      {/each}
    </h2>

    {#if see_more !== null && see_more_href !== null}
      <span class="mr-6">
        <Link href={see_more_href}>
          <span class="relative ml-0.5 text-lg text-purple-700">
            {see_more}&nbsp;&nbsp;&nbsp;&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="absolute bottom-1 right-0.5 inline h-4 w-4">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </Link>
      </span>
    {/if}
  </div>

  <div class="flex flex-col gap-4 pl-2">
    <slot />
  </div>
</section>

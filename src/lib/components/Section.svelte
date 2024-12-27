<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    id: string;
    name?: string;
    children?: Snippet;
  }

  let { id, name, children }: Props = $props();

  const rainbow_colors: string[] = [
    "text-red-500",
    "text-orange-500",
    "text-yellow-500",
    "text-green-500",
    "text-blue-500",
    "text-indigo-500",
    "text-violet-500",
  ];
  let color_idx = $state(Math.floor(Math.random() * rainbow_colors.length));

  setInterval(() => color_idx++, 100);
</script>

<section class="my-2">
  <div class="mt-4 mb-6 flex flex-row items-baseline justify-between">
    <h2 {id} class="font-mono text-3xl font-bold">
      {#each (name ?? id).split("") as letter, idx}
        <span class={rainbow_colors[(color_idx + idx) % rainbow_colors.length]}>{letter}</span>
      {/each}
    </h2>
  </div>

  <div class="flex flex-col gap-4 pl-2">
    {@render children?.()}
  </div>
</section>

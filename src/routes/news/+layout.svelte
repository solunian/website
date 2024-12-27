<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="flex min-h-screen flex-col font-serif text-black dark:text-zinc-300">
  {@render children?.()}
</div>

<script lang="ts">
  import type { LayoutProps } from "./$types";

  let { children }: LayoutProps = $props();
</script>

<div class="flex min-h-screen flex-col font-serif text-black dark:text-zinc-300">
  {@render children()}
</div>

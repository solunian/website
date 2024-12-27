<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    href?: string;
    children?: Snippet;
  }

  let { href, children }: Props = $props();

  const target: string = href?.startsWith("#") || href?.startsWith("/") ? "_self" : "_blank";
  const def = (val: string | undefined) => val !== undefined;
</script>

{#if def(href)}
  <a
    {href}
    {target}
    class="group whitespace-break-spaces rounded text-black underline decoration-zinc-400 transition hover:bg-zinc-200 dark:text-white dark:decoration-zinc-500 dark:hover:bg-zinc-700">
    {@render children?.()}
  </a>
{:else}
  <div
    class="group whitespace-break-spaces rounded text-black underline decoration-zinc-400 transition hover:bg-zinc-200 dark:text-white dark:decoration-zinc-500 dark:hover:bg-zinc-700">
    {@render children?.()}
  </div>
{/if}

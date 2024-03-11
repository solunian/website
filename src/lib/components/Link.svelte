<script lang="ts">
  export let href: string | undefined = undefined;

  const target: string = href?.startsWith("#") || href?.startsWith("/") ? "_self" : "_blank";
  const def = (val: any) => val !== undefined;
</script>

{#if def(href)}
  <a
    {href}
    {target}
    class="group whitespace-break-spaces rounded text-black underline decoration-zinc-400 transition hover:bg-zinc-200 dark:text-white dark:decoration-zinc-500 dark:hover:bg-zinc-700">
    <slot />
  </a>
{:else}
  <div
    class="group whitespace-break-spaces rounded text-black underline decoration-zinc-400 transition hover:bg-zinc-200 dark:text-white dark:decoration-zinc-500 dark:hover:bg-zinc-700">
    <slot />
  </div>
{/if}

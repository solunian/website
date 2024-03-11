<script lang="ts">
  import Link from "$lib/components/Link.svelte";

  export let title: string | undefined;
  export let url: string | undefined;

  const def = (val: any) => val !== undefined;
</script>

{#if def(url)}
  <Link href={url ?? ""}>
    {#if def(title)}
      <span class="group-visited:text-purple-800 dark:group-visited:text-purple-300">{title}</span>
    {:else}
      <span class="text-red-500">{"[untitled story]"}</span>
    {/if}
  </Link>
{:else if def(title)}
  {title}
{:else}
  <span class="text-red-500">{"[untitled story]"}</span>
{/if}

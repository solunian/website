<script lang="ts">
  import Link from "$lib/components/Link.svelte";

  export let title: string | undefined;
  export let url: string | undefined;

  const is_def = (val: any) => val !== undefined;
</script>

{#if is_def(url)}
  <Link href={url ?? ""}>
    {title ?? "[untitled story]"}
  </Link>
{:else}
  {title ?? "[untitled story]"}
{/if}

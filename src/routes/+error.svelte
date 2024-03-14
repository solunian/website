<script lang="ts">
  import { page } from "$app/stores";
  import Link from "$lib/components/Link.svelte";
</script>

<svelte:head>
  <title>{$page.status}: {$page.error?.message}</title>
</svelte:head>

<div class="mx-4 flex flex-col items-center justify-center gap-4 pt-28 text-center md:mx-10">
  <h1 class="font-mono text-3xl text-black md:text-4xl dark:text-white">
    {$page.status}: {$page.error?.message}
  </h1>
  <img src="/website/polite_cat.avif" alt="polite cat" class="rounded-xl" />

  <Link href="/"><span class="font-mono text-3xl">Home</span></Link>
</div>

<script lang="ts">
  import Link from "./Link.svelte";

  export let title: string;
  export let link: string;
</script>

<div>
  <h3 class="inline">
    <Link href={link}>{title}</Link>
    ·
  </h3>
  <slot />
</div>

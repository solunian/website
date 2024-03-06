<script lang="ts">
  export let href: string;

  const target: string = href.startsWith("#") || href.startsWith("/") ? "_self" : "_blank";
</script>

<a
  {href}
  {target}
  class="whitespace-break-spaces rounded-lg border bg-orange-500 px-1.5 font-mono text-white transition hover:scale-105 hover:bg-orange-600 dark:bg-orange-600 dark:hover:bg-orange-700">
  <slot />
</a>

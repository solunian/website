<script lang="ts">
  export let href: string;

  const target: string = href.startsWith("#") || href.startsWith("/") ? "_self" : "_blank";
</script>

<a
  {href}
  {target}
  class="whitespace-break-spaces rounded text-black underline decoration-zinc-400 transition hover:bg-zinc-200 dark:text-white dark:decoration-zinc-500 dark:hover:bg-zinc-700">
  <slot />
</a>

<script lang="ts">
  export let href: string;

  const target: string = href.startsWith("#") || href === "/" ? "_self" : "_blank";
</script>

<a
  {href}
  {target}
  class={`whitespace-nowrap rounded text-black underline decoration-gray-400 transition hover:bg-gray-200 dark:text-white dark:decoration-zinc-500 dark:hover:bg-zinc-700`}>
  <slot />
</a>

<script lang="ts">
  export let href: string;

  const target: string = href.startsWith("#") ? "_self" : "_blank";
</script>

<a
  {href}
  {target}
  class={`rounded text-black underline decoration-gray-400 transition hover:bg-gray-200`}>
  <slot />
</a>

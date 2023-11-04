<script lang="ts">
  export let id: string;
  export let name: string | null = null;
</script>

<section>
  <h2 {id} class="my-4 font-mono text-3xl font-bold text-gray-400">
    {name ?? id}
  </h2>

  <div class="flex flex-col gap-4 pl-2">
    <slot />
  </div>
</section>

<script lang="ts">
	import type { PageData } from './$types';
	
	export let data: PageData;

</script>

{#each data.item_list as item}
  <div class="border p-1">
    {item.title}
  </div>
{/each}
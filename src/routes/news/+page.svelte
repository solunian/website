<script lang="ts">
  import { onMount } from "svelte";
  import type { PageData } from "./$types";
  import type { ItemID, ItemType, Item } from "./types";
  import Story from "./Story.svelte";

  export let data: PageData;

  enum Status {
    Loading,
    Success,
    Failed,
  }

  let fetch_status: Status = Status.Loading;
  let item_list: Item[] = [];

  onMount(async () => {
    try {
      const item_id_list: ItemID[] = await (await fetch(data.fetch_url)).json();

      const item_promises = item_id_list
        .slice(0, 30)
        .map((id) => fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`));

      const item_responses = await Promise.all(item_promises);
      item_list = await Promise.all(item_responses.map(async (res) => await res.json()));

      fetch_status = Status.Success;
    } catch (err) {
      fetch_status = Status.Failed;
    }
  });
</script>

{#if fetch_status === Status.Loading}
  <div>loading</div>
{:else if fetch_status === Status.Failed}
  <div>failed</div>
{:else if fetch_status === Status.Success}
  <div class="px-20 py-5">
    <a href="/" class="rounded border p-1">home</a>

    {#if item_list !== undefined}
      <div class="">
        {#each item_list as item}
          <Story {item} />
        {/each}
      </div>
    {/if}
  </div>
{/if}

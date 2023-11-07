<script lang="ts">
  import { pixel_art } from "$lib/info";

  const NUM_SHOWN: number = 6;

  let gallery_opened: boolean = false;
  let button_text: string = "show more!";
  const toggle_gallery = () => {
    gallery_opened = !gallery_opened;
    if (gallery_opened) {
      button_text = "show less...";
    } else {
      button_text = "show more!";
    }
  };
</script>

<div class="grid grid-cols-2 gap-3 md:grid-cols-3">
  {#each pixel_art.slice(0, NUM_SHOWN) as piece}
    <div class="flex h-full w-full flex-col justify-center rounded-lg bg-stone-300">
      <img src={`/pixel-art/${piece}`} alt={piece.split(".")[0]} class="w-full rounded-lg" />
    </div>
  {/each}

  {#if gallery_opened}
    {#each pixel_art.slice(NUM_SHOWN) as sketch}
      <div class="flex h-full w-full flex-col justify-center rounded-lg bg-stone-300">
        <img src={`/pixel-art/${sketch}`} alt={sketch.split(".")[0]} class="w-full rounded-lg" />
      </div>
    {/each}
  {/if}
</div>

{#if pixel_art.length > NUM_SHOWN}
  <div class="flex flex-row justify-center">
    <button
      class="w-fit rounded border-2 border-gray-200 px-2 transition hover:scale-105 hover:bg-gray-200"
      on:click={toggle_gallery}>{button_text}</button>
  </div>
{/if}

<script lang="ts">
  import { sketches } from "$lib/info";

  const NUM_SHOWN: number = 6;

  // this loads all of them at page load, big no no
  // onMount(() => {
  //   for (let sketch of sketches) {
  //     let src = `/sketches/${sketch}`;
  //     const img = new Image();
  //     img.src = src;
  //   }
  // });

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
  {#each sketches.slice(0, NUM_SHOWN) as sketch}
    <div class="flex h-full w-full flex-col justify-center rounded-lg bg-stone-300">
      <img src={`/sketches/${sketch}`} alt={sketch.split(".")[0]} class="w-full rounded-lg" />
    </div>
  {/each}

  {#if gallery_opened}
    {#each sketches.slice(NUM_SHOWN) as sketch}
      <div class="flex h-full w-full flex-col justify-center rounded-lg bg-stone-300">
        <img src={`/sketches/${sketch}`} alt={sketch.split(".")[0]} class="w-full rounded-lg" />
      </div>
    {/each}
  {/if}
</div>

<div class="flex flex-row justify-center">
  <button
    class="w-fit rounded border-2 border-gray-200 px-2 transition hover:scale-105 hover:bg-gray-200"
    on:click={toggle_gallery}>{button_text}</button>
</div>

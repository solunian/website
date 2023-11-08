<script lang="ts">
  const NUM_SHOWN: number = 6;

  export let folder: string;
  export let filenames: string[];
  export let grayscale: boolean = false;

  // this loads all of them at page load, big no no?
  // onMount(() => {
  //   for (let piece of filenames) {
  //     let src = `/${folder}/${piece}`;
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
  {#each filenames.slice(0, NUM_SHOWN) as piece}
    <div
      class={`flex w-full flex-col justify-center rounded-lg bg-gray-300 ${
        grayscale ? "grayscale" : ""
      }`}>
      <img
        src={`/${folder}/${piece}`}
        alt={piece.split(".")[0].replaceAll("_", " ")}
        class="w-full rounded-lg" />
    </div>
  {/each}

  {#if gallery_opened}
    {#each filenames.slice(NUM_SHOWN) as piece}
      <div
        class={`flex w-full flex-col justify-center rounded-lg bg-gray-300 ${
          grayscale ? "grayscale" : ""
        }`}>
        <img
          src={`/${folder}/${piece}`}
          alt={piece.split(".")[0].replaceAll("_", " ")}
          class="w-full rounded-lg" />
      </div>
    {/each}
  {/if}
</div>

{#if filenames.length > NUM_SHOWN}
  <div class="flex flex-row justify-center">
    <button
      class="w-fit rounded border-2 border-gray-200 px-2 transition hover:scale-105 hover:bg-gray-200"
      on:click={toggle_gallery}>{button_text}</button>
  </div>
{/if}

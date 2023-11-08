<script lang="ts">
  import { onMount } from "svelte";

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

  let modal: HTMLDialogElement;

  let modal_open_idx: number = -1;
  const open_modal = (idx: number) => {
    modal_open_idx = idx;
    modal.showModal();
  };
  const close_modal = () => {
    modal.close();
  };

  onMount(() => {
    modal.addEventListener("close", () => {
      modal_open_idx = -1;
    });
  });
</script>

<dialog class="bg-transparent" bind:this={modal}>
  {#if modal_open_idx !== -1}
    <button class="fixed left-0 top-0 -z-10 h-full w-full cursor-default" on:click={close_modal} />

    <button
      class="absolute right-1 top-1 z-10 stroke-gray-900 opacity-50 transition hover:opacity-75"
      on:click={close_modal}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="h-14 w-14">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>

    <img
      src={`/${folder}/${filenames[modal_open_idx]}`}
      alt={filenames[modal_open_idx].split(".")[0].replaceAll("_", " ")}
      class={`max-h-[75vh] max-w-[75vw] rounded-xl md:max-w-[50vw] ${
        grayscale ? "grayscale" : ""
      }`} />
  {/if}
</dialog>

<div class="grid grid-cols-2 gap-3 md:grid-cols-3">
  {#each filenames.slice(0, NUM_SHOWN) as piece, idx}
    <button
      on:click={() => open_modal(idx)}
      class={`flex w-full flex-col justify-center rounded-lg bg-gray-300 ${
        grayscale ? "grayscale" : ""
      }`}>
      <img
        src={`/${folder}/${piece}`}
        alt={piece.split(".")[0].replaceAll("_", " ")}
        class="w-full rounded-lg" />
    </button>
  {/each}

  {#if gallery_opened}
    {#each filenames.slice(NUM_SHOWN) as piece, idx}
      <button
        on:click={() => open_modal(NUM_SHOWN + idx)}
        class={`flex w-full flex-col justify-center rounded-lg bg-gray-300 ${
          grayscale ? "grayscale" : ""
        }`}>
        <img
          src={`/${folder}/${piece}`}
          alt={piece.split(".")[0].replaceAll("_", " ")}
          class="w-full rounded-lg" />
      </button>
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

<style>
  ::backdrop {
    @apply bg-gray-900 opacity-75;
  }
</style>

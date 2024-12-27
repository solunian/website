<script lang="ts">
  import { fade } from "svelte/transition";

  const NUM_SHOWN: number = 6;

  interface Props {
    folder: string;
    filenames: string[];
    grayscale?: boolean;
  }

  let { folder, filenames, grayscale = false }: Props = $props();

  // this loads all of them at page load, big no no?
  // onMount(() => {
  //   for (let piece of filenames) {
  //     let src = `/${folder}/${piece}`;
  //     const img = new Image();
  //     img.src = src;
  //   }
  // });

  let gallery_opened: boolean = $state(false);
  let button_text: string = $state("show more!");
  const toggle_gallery = () => {
    gallery_opened = !gallery_opened;
    if (gallery_opened) {
      button_text = "show fewer...";
    } else {
      button_text = "show more!";
    }
  };

  let modal: HTMLDialogElement;

  let modal_open_idx: number = $state(-1);
  const open_modal = (idx: number) => {
    modal_open_idx = idx;
    modal.showModal();
  };
  const close_modal = () => {
    modal.close();
  };
</script>

<dialog class="self-center justify-self-center bg-transparent" bind:this={modal}>
  {#if modal_open_idx !== -1}
    <button
      aria-label="background modal close"
      class="fixed top-0 left-0 -z-10 h-full w-full cursor-default"
      onclick={close_modal}
      tabindex="-1"
      transition:fade={{ duration: 200 }}></button>

    <button
      aria-label="x modal close"
      class="absolute top-1 right-1 z-10 stroke-zinc-900 opacity-50 transition hover:opacity-75"
      onclick={close_modal}
      transition:fade={{ duration: 200 }}>
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
      transition:fade={{ duration: 200 }}
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
      onclick={() => open_modal(idx)}
      class={`flex w-full flex-col justify-center rounded-lg bg-zinc-300 shadow transition duration-200 hover:shadow-xl ${
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
        onclick={() => open_modal(NUM_SHOWN + idx)}
        class={`flex w-full flex-col justify-center rounded-lg bg-zinc-300 shadow transition duration-200 hover:shadow-xl ${
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
      class="w-fit rounded-sm border-2 border-zinc-200 px-2 transition hover:scale-105 hover:bg-zinc-200 dark:border-zinc-800 dark:hover:bg-zinc-800"
      onclick={toggle_gallery}>{button_text}</button>
  </div>
{/if}

<style>
  @import "tailwindcss/theme" theme(reference);

  ::backdrop {
    @apply bg-zinc-900 opacity-75;
  }
</style>

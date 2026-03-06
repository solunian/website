<script>
  import Footer from "$lib/components/footer.svelte";
  import Gallery from "$lib/components/gallery.svelte";
  import Link from "$lib/components/link.svelte";
  import Section from "$lib/components/section.svelte";
</script>

<svelte:head>
  <title>Daniel's Archive • solunian.dev</title>
</svelte:head>

<div class="flex w-full flex-row lg:justify-center">
  <div
    class="flex max-w-5xl flex-col gap-4 px-6 pt-4 pb-8 sm:gap-8 sm:px-12 sm:pt-6 sm:pb-10 md:px-20 md:pt-10 md:pb-12">
    <header class="mt-8 flex max-w-2xl flex-col gap-4">
      <div class="mb-4 flex flex-row flex-wrap items-center gap-4 sm:gap-6">
        <img src="/website/icon_outline.png" alt="icon" class="h-12" />

        <h1 class="font-lexend text-4xl font-medium text-black dark:text-white">
          Daniel's Archive
        </h1>
      </div>

      <p>
        Some amateurish art. What is life without its meaningless, redundant whimsies? Just someone
        who occasionally enjoys the imprecise yet ineffable quality of a physical or digital media,
        whether it be pixels or vectors or carbon dust.
      </p>

      <hr class="rounded-full border-1 border-zinc-300 dark:border-zinc-700" />

      <div>
        <Link href="/">[..]</Link>
        <Link href="#sketches">[#sketches]</Link>
        <Link href="#pixel-art">[#pixel-art]</Link>
      </div>

      <!-- <p>...not grandiose at all.</p> -->
    </header>

    <Section id="sketches">
      <Gallery
        folder="sketches"
        grayscale
        filenames={[
          "iris.jpg",
          "vishnu.jpg",
          "ishaan.jpg",
          "angela.jpg",
          "sunny.jpg",
          "justin_avy.jpg",
          "susan.jpg",
          "rishi.jpg",
          "annie.jpg",
          "shine.jpg",
          "lincoln_skull.jpg",
          "orchids.jpg",
          "daniels_hand.jpg",
          "shreyan.jpg",
          "sanias_bottle.jpg",
          "rose.jpg",
          "apple.jpg",
          "tiffany.jpg",
          "book_talk_big_three.jpg",
          "arnav.jpg",
          "alicia.jpg",
          "avy.jpg",
          "elaine.jpg",
          "ajay.jpg",
          "kitten.jpg",
          "little_bird.jpg",
          "owl.jpg",
          "phoenix.jpg",
          "christmas_hat_bird.jpg",
          "porg.jpg",
          "panda.jpg",
          "tiger.jpg",
          "wolf.jpg",
          "seagull.jpg",
        ]} />
    </Section>

    <Section id="pixel-art" name="pixel art">
      <Gallery
        folder="pixel-art"
        filenames={[
          "storke_tower.png",
          "rick_astley.png",
          "shine_pfp.png",
          "worst_intersection.png",
          "creekside.png",
        ]} />
    </Section>
  </div>
</div>

<Footer />

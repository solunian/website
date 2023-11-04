<script>
  import Link from "$lib/components/Link.svelte";
  import Project from "$lib/components/Project.svelte";
  import Section from "$lib/components/Section.svelte";
</script>

<svelte:head>
  <title>solunian.dev</title>
</svelte:head>

<header class="mt-8 flex max-w-2xl flex-col gap-5">
  <h1 class="font-lexend text-4xl font-bold text-black">Daniel Cui</h1>

  <p class="mt-4">Hi there! I'm a high school senior in the Bay Area.</p>

  <p>
    I like creating <Link href="#projects">cool things</Link> with code, making <Link
      href="#pixel-art">pixel art</Link> | <Link href="#sketches">sketching</Link> random things, and
    writing
    <Link href="#stories">stories</Link>.
  </p>

  <p>Right now, I'm applying to college.</p>
  
  <div>
    
  </div>
</header>

<Section id="projects">
  <p>...</p>

  <Project title="Tinovation Website" link="https://tinovation.org/">
    The amazing website for the revolutionized Tinovation club! Includes general club information,
    programming resources, a showcase for members' projects, and the leaderboard.
  </Project>

  <Project title="CHS Map" link="https://chs-map.vercel.app">
    An interactive map for Cupertino High School to help students navigate around campus.
  </Project>

  <p>...</p>
</Section>

<Section id="pixel-art" name="pixel art">
  <p>...</p>
</Section>

<Section id="sketches">
  <p>...</p>
</Section>

<Section id="stories">
  <p>...</p>
</Section>

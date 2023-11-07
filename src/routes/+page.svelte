<script>
  import Link from "$lib/components/Link.svelte";
  import Project from "$lib/components/Project.svelte";
  import Section from "$lib/components/Section.svelte";
  import SketchesGallery from "$lib/components/SketchesGallery.svelte";
</script>

<svelte:head>
  <title>Daniel Cui</title>
</svelte:head>

<header class="mt-8 flex max-w-2xl flex-col gap-4">
  <h1 class="mb-4 font-lexend text-4xl font-bold text-black">Daniel Cui</h1>

  <p>Hi there! I'm a high school senior in the Bay Area.</p>

  <p>
    I enjoy creating <Link href="#projects">[cool things]</Link> with code, making
    <Link href="#pixel-art">[pixel art]</Link>, <Link href="#sketches">[sketching]</Link>, and
    writing <Link href="#stories">[stories]</Link>. Feel free to check out my work below!
  </p>

  <p>
    Right now, I'm working on
    <Link href="https://github.com/solunian/two-colors"><b>two-colors</b></Link>, a game to treat
    amblyopia (lazy eye), and
    <Link href="https://github.com/solunian/tart"><b>tart</b></Link>, a simple project management
    tool.
  </p>

  <p>
    Reach me at <Link href="mailto:solunian@gmail.com">solunian@gmail.com</Link>
    or <span class="text-[#5865F2]">@solunian</span> on Discord.
  </p>
</header>

<Section id="projects" see_more="GitHub" see_more_href="https://github.com/solunian">
  <Project title="Jazzboard" link="https://jazzboard.vercel.app/">
    A way to play jazz piano lead sheets on a computer keyboard. Prototyped at Hack Club's <Link
      href="https://outernet.hackclub.com">Outernet</Link
    >!
  </Project>

  <Project title="Tinovation Website" link="https://tinovation.org/">
    The amazing website for the revolutionized Tinovation club! Includes general club information,
    programming resources, a showcase for members' projects, and a cool leaderboard.
  </Project>

  <Project title="CHS Map" link="https://chs-map.vercel.app/">
    An interactive map for Cupertino High School to help students navigate around campus.
  </Project>

  <Project title="Calc BC Final Presentation" link="https://saper-two.vercel.app/">
    A visual math lesson on the surface area from a rotated graph. Used
    <Link href="https://github.com/3b1b/manim">manim</Link> for cool animations!
  </Project>

  <Project title="dripdrop" link="https://dripdrop-two.vercel.app/">
    "The next-gen water source." A website to test basic
    <Link href="https://www.react-spring.dev/">react-spring</Link>
    animations and dark mode with <Link href="https://tailwindcss.com/">tailwindcss</Link>.
  </Project>

  <Project title="Muting Ads on Spotify" link="https://github.com/solunian/mute-ads">
    A tool to mute ads on Spotify through the computer's volume using the API and some simple audio
    manipulation with Python.
  </Project>
</Section>

<Section id="pixel-art" name="pixel art">
  <p>To be added!</p>
</Section>

<Section id="sketches">
  <SketchesGallery />
</Section>

<Section id="stories">
  <p>To be added!</p>
</Section>

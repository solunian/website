<script>
  import Link from "$lib/components/Link.svelte";
  import Project from "$lib/components/Project.svelte";
  import Section from "$lib/components/Section.svelte";
  import Gallery from "$lib/components/Gallery.svelte";
</script>

<svelte:head>
  <title>Daniel Cui</title>
</svelte:head>

<div class="flex w-full flex-row lg:justify-center">
  <div
    class="flex max-w-5xl flex-col gap-4 px-6 pb-8 pt-4 sm:gap-8 sm:px-12 sm:pb-10 sm:pt-6 md:px-20 md:pb-12 md:pt-10">
    <header class="mt-8 flex max-w-2xl flex-col gap-4">
      <div class="mb-4 flex flex-row items-center gap-6">
        <h1 class="font-lexend text-4xl font-bold text-black">Daniel Cui</h1>
        <a href="/">
          <img src="/website/icon.png" alt="icon" class="h-12" />
        </a>
      </div>

      <p>Hi there! I'm a high school senior in the Bay Area.</p>

      <p>
        I enjoy creating <Link href="#projects">[cool things]</Link> with code,
        <Link href="#sketches">[sketching]</Link>, making <Link href="#pixel-art">[pixel art]</Link
        >, and writing <Link href="#stories">[stories]</Link>. Feel free to check out my work below!
      </p>

      <p>
        Right now, I'm working on
        <Link href="https://github.com/solunian/two-colors"><b>two-colors</b></Link>, a game to
        treat amblyopia (lazy eye), and
        <Link href="https://github.com/solunian/tart"><b>tart</b></Link>, a simple project
        management tool.
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

      <Project title="Tinovation Website" link="https://tinovation.org/" starred>
        The amazing website for the revolutionized Tinovation club! Includes general club
        information, programming resources, a showcase for members' projects, and a cool
        leaderboard.
      </Project>

      <Project title="CHS Map" link="https://chs-map.vercel.app/" starred>
        An interactive map for Cupertino High School to help students navigate around campus.
      </Project>

      <Project title="Calc BC Final Presentation" link="https://saper-two.vercel.app/">
        A visual math lesson on the surface area from a rotated graph. Used
        <Link href="https://github.com/3b1b/manim">manim</Link> for cool animations!
      </Project>

      <Project title="LifeLink" link="https://lifelink-eta.vercel.app/">
        Digital medical IDs for emergencies. 3rd place at Corpus Hacks 2023!
      </Project>

      <Project title="Neighborhood Watch" link="https://hack-cupertino.vercel.app/">
        Live tracker/reporter for crime or suspicious activity through map pinpoints, images, and
        descriptions. For Hack Cupertino 2023.
      </Project>

      <Project title="MedTalk" link="https://medtalk.vercel.app/">
        Healthcare chatbot for quick and easy medical advice; plus, a searchable catalog of common
        medications. For Los Altos Hacks VII.
      </Project>

      <Project title="College Tree" link="https://college-tree.vercel.app/">
        Website for matching activities to high school students who are trying to get into college.
        For CUHSD Hackathon IV.
      </Project>

      <Project title="Dripdrop" link="https://dripdrop-two.vercel.app/">
        "The next-gen water source." A website to test basic
        <Link href="https://www.react-spring.dev/">react-spring</Link>
        animations and dark mode with <Link href="https://tailwindcss.com/">tailwindcss</Link>.
      </Project>

      <Project title="Mute Ads on Spotify" link="https://github.com/solunian/mute-ads">
        A tool to mute ads on Spotify through the computer's volume using the API and some simple
        audio manipulation with Python.
      </Project>
    </Section>

    <Section id="sketches">
      <Gallery
        folder="sketches"
        grayscale
        filenames={[
          "orchids.jpg",
          "daniels_hand.jpg",
          "shreyan.jpg",
          "sanias_bottle.jpg",
          "apple.jpg",
          "rose.jpg",
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
          "rick_astley.png",
          "shine_pfp.png",
          "worst_intersection.png",
          "creekside.png",
        ]} />
    </Section>

    <Section id="stories">
      <p>
        Note: I had written several stories a while ago, but looking back now, they are definitely
        not my best work. So, back to the drawing board I go!
      </p>
    </Section>
  </div>
</div>

<footer class="flex flex-row justify-center bg-gray-50 pb-4 pt-2 font-mono text-gray-300">
  destiny.
</footer>

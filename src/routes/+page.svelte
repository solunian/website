<script>
  import Link from "$lib/components/link.svelte";
  import Project from "$lib/components/project.svelte";
  import Section from "$lib/components/section.svelte";
  import Footer from "$lib/components/footer.svelte";
  import Article from "$lib/components/article.svelte";
</script>

<svelte:head>
  <title>Daniel Cui • solunian.dev</title>
</svelte:head>

<div class="flex w-full flex-row lg:justify-center">
  <div
    class="flex max-w-5xl flex-col gap-4 px-6 pt-4 pb-8 sm:gap-8 sm:px-12 sm:pt-6 sm:pb-10 md:px-20 md:pt-10 md:pb-12">
    <header class="mt-8 flex max-w-2xl flex-col gap-4">
      <div class="mb-4 flex flex-row items-center gap-4 sm:gap-6">
        <img src="/website/icon.avif" alt="icon" class="inline h-12" />

        <h1
          class="font-lexend text-3xl font-medium text-wrap text-black sm:text-4xl dark:text-white">
          Daniel Cui
        </h1>
      </div>

      <p>
        Hi there! I'm a second year college student from the Bay Area, studying CS at UC Santa
        Barbara.
      </p>

      <p>
        Reach me at <Link href="mailto:solunian@gmail.com">solunian@gmail.com</Link>
        or
        <span class="text-[#5865F2]">@solunian</span> on Discord.
      </p>

      <hr class="rounded-full border-1 border-zinc-300 dark:border-zinc-700" />

      <div>
        <Link href="#projects">[#projects]</Link>
        <Link href="#thoughts">[#thoughts]</Link>
        <Link href="/news">[/news]</Link>
        <Link href="/archive">[/archive]</Link>
        <Link href="https://github.com/solunian"
          >[<span class="text-green-600">{">github"}</span>]</Link>
        <Link href="https://instagram.com/solunian"
          >[<span
            class="bg-linear-to-r from-[#FFD600] via-[#FF0069] to-[#7638FA] bg-clip-text text-transparent"
            >{">instagram"}</span
          >]</Link>
      </div>
    </header>

    <Section id="projects">
      <Project
        title="two-colors"
        link="https://solunian.itch.io/two-colors"
        github_link="https://github.com/solunian/two-colors"
        starred>
        Game to treat amblyopia (lazy eye) through minigames while wearing color-tinted 3D glasses;
        built with the LÖVE game engine in Lua. Still a rough demo.
      </Project>

      <Project title="clap-mc" github_link="https://github.com/solunian/clap-mc">
        Media controller for a computer's audio/video playback by detecting claps. For SBHacks XI.
      </Project>

      <Project title="identicon" github_link="https://github.com/solunian/identicon">
        Incredibly simple identicon generator in Rust. Playing around with pixel-based art from
        seeded hash data.
      </Project>

      <Project
        title="lua-docs"
        link="https://lua-docs.vercel.app/"
        github_link="https://github.com/solunian/lua-docs">
        Aesthetic documentation for the coolest scripting language!
      </Project>

      <Project
        title="countdown"
        link="https://countdown.solunian.dev"
        github_link="https://github.com/solunian/countdown">
        A pretty clean and messily written countdown generator for deadlines and timers. Just a
        kinda half-baked project made over a weekend.
      </Project>

      <Project
        title="Daniel's Hacker News"
        link="/news"
        github_link="https://github.com/solunian/website/tree/main/src/routes/news"
        starred>
        Aesthetic wrapper for Y Combinator's Hacker News. Just a nice way to check out tech news.
      </Project>

      <Project title="Personal Website" link="/" github_link="https://github.com/solunian/website">
        Huh. I guess you're already here... well, that's something, isn't it? Anyway, have a nice
        day! Stay determined!
      </Project>

      <Project
        title="unimash"
        link="https://unimash.vercel.app/"
        github_link="https://github.com/solunian/unimash">
        A joke website replicating FaceMash for "uni"-versities. Just some fun with MongoDB,
        SvelteKit's form actions, and chess rating systems.
      </Project>

      <Project
        title="jazzboard"
        link="https://jazzboard-solunian.vercel.app/"
        github_link="https://github.com/solunian/jazzboard"
        starred>
        A hacky way to play jazz piano lead sheets on a computer keyboard. Prototyped at Hack Club's <Link
          href="https://outernet.hackclub.com">Outernet</Link
        >!
      </Project>

      <Project
        title="Tinovation Website"
        link="https://tinovation.org/"
        github_link="https://github.com/tinovationchs/tinovation-website">
        The amazing website for the revolutionized Tinovation club! Includes general club
        information, programming resources, a showcase for members' projects, and a cool
        leaderboard.
      </Project>

      <Project
        title="CHS Map"
        link="https://chs-map.vercel.app/"
        github_link="https://github.com/solunian/chs-map"
        starred>
        Interactive map for Cupertino High School to help students navigate around campus.
      </Project>

      <Project
        title="Calc BC Final Presentation"
        link="https://saper-two.vercel.app/"
        github_link="https://github.com/solunian/saper">
        A visual math lesson on the surface area from a rotated curve. Used
        <Link href="https://github.com/3b1b/manim">manim</Link> for cool animations!
      </Project>

      <Project
        title="LifeLink"
        link="https://lifelink-eta.vercel.app/"
        github_link="https://github.com/solunian/lifelink">
        Digital medical IDs for emergencies. 3rd place at Corpus Hacks 2023.
      </Project>

      <Project
        title="Neighborhood Watch"
        link="https://hack-cupertino.vercel.app/"
        github_link="https://github.com/solunian/neighborhood-watch">
        Live tracker/reporter for crime or suspicious activity through map pinpoints, images, and
        descriptions. For Hack Cupertino 2023.
      </Project>

      <Project
        title="MedTalk"
        link="https://medtalk.vercel.app/"
        github_link="https://github.com/solunian/medtalk">
        Healthcare chatbot for quick and easy medical advice; plus, a searchable catalog of common
        medications. For Los Altos Hacks VII.
      </Project>

      <!-- <Project title="College Tree" link="https://college-tree.vercel.app/">
        Website for matching activities to high school students who are trying to get into college.
        For CUHSD Hackathon IV.
      </Project> -->

      <Project
        title="dripdrop"
        link="https://dripdrop-two.vercel.app/"
        github_link="https://github.com/solunian/dripdrop">
        "The next-gen water source." A website to test basic react-spring animations and dark mode
        with tailwindcss.
      </Project>

      <Project title="Mute Ads on Spotify" github_link="https://github.com/solunian/mute-ads">
        Tool to mute ads on Spotify through the computer's volume using the API and some simple
        audio manipulation with Python.
      </Project>
    </Section>

    <Section id="thoughts">
      <Article title="The Metric System">
        <p>celsius is better than fahrenheit</p>
        <p>cooking using tbsp, tsp, cups, gallons, etc. is ridiculous</p>
        <p>visualizing/converting is easier with distance / length / volume / weight</p>
        <p>
          caveat: weight in kg is not "weight"; it is mass; should use newtons (~x10 from kilograms)
        </p>
      </Article>

      <Article title="Time Formatting">
        <p>
          24-hr time is better than 12 hours with am/pm. You still use the same number of digits
          without an extra am/pm value. No confusion of 12 am vs 12 pm.
        </p>
        <p>
          Date should follow numerical ordering, not speech order. either year-month-day or
          day-month-year.
        </p>
      </Article>

      <Article title="Football, Not Soccer.">
        <p>this is kinda duh.</p>
      </Article>

      <Article title="snake_case > PascalCase > camelCase">
        <p>
          snake_case is simple: replace all spaces with underscores, and full caps for constants is
          easy. It is also very readable. The other ones are less appealing. Filenames should
          typicaly follow snake_case, and directories should use kebab-case (snake case with
          hyphens).
        </p>
      </Article>
    </Section>

    <!-- <Section id="stories">
      <p>
        Note: I had written several stories a while ago, but looking back now, they are definitely
        not my best work. So, back to the drawing board I go!
      </p>
    </Section> -->
  </div>
</div>

<Footer />

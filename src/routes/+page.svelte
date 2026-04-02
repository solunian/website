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

      <hr class="rounded-full border border-zinc-300 dark:border-zinc-700" />

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
        title="Poker Bot Tournament Backend"
        github_link="https://github.com/solunian/poker-backend-server">
        FastAPI backend server that handles code file uploads, table/game logic (bugged), and
        passing data to run submitted code for poker games. For touranment where participants submit
        code that plays poker.
      </Project>

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
        github_link="https://github.com/solunian/jazzboard">
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
        github_link="https://github.com/solunian/chs-map">
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
      <Article title="Use the Metric System">
        <p>
          For Americans (such as myself), I understand the reluctance to use something unfamiliar in
          every day life; however, there are too many good reasons to immerse yourself in the metric
          system.
        </p>

        <p>
          <b>Majority of the world uses it.</b> So it is good for international traveling, conversing
          with people from outside the country, and keeping in touch with a more globally connected world.
        </p>

        <p>
          <b>Cooking with precise measurements.</b> Using tbsp, tsp, cups, gallons, etc. is often time
          consuming and leaves many measuring utensils dirty. Using a scale provides more accurate measurements
          of weight (not volume) for whatever you need to cook.
        </p>

        <p>
          <b>Conversion and visualization are easier</b> for distance/length (meter), volume (liter),
          weight/mass (gram). With its consistent prefixes as powers of ten onto base units, conversions
          can simply be done by moving the decimal point. Traveling one kilometer can be easily broken
          down to 1000 meters, and one liter of water will weight one kilogram. There will be no need
          to know 5280 feet to one mile, or the difference between fluid ounces and weight ounces, or
          any other arbitrary, non-base-10 divisions for units of 3, 8, 12, 16, ... but no more! Metric
          is literally the basis for all modern science standardizations because it is simple and consistent.
        </p>

        <p>
          <b>Celsius.</b> 0 is freezing point, 100 is boiling point for water. For all the fahrenheit
          fanatics out there, I get that you *think* it's intuitive, but just strip away all the ingrained
          emotions of familiarity. Why is 32 the freezing point and 212 the boiling point? Sure, you
          have more precision with integer values but can people even tell the difference of one degree
          fahrenheit? (also you can put a decimal point for celsius) If this is just an arbitrary measure
          to know temperature, can't we gain an intuition for both?
        </p>

        <p>Now I bet you are so convinced to become unit fluent so here is what you can do:</p>
        <ul class="list-disc pl-6">
          <li>Convert weather/thermostat temperatures to celsius. (c * 1.8 + 32 = f)</li>
          <li>Convert fitness tracking distance to kilometers. (1.6 * km = mi)</li>
          <li>Get a cooking scale that uses grams.</li>
          <li>Use kilograms for body weight and meters/cm for height.</li>
        </ul>

        <p>
          And that's pretty much it! Gradually, you will be able to understand both systems easily;
          e.g. I will understand when my friend says it is 68 degrees out while my phone tells me
          20. To anyone who appreciates simplicity and well-defined standards, you should make this
          switch.
        </p>
      </Article>

      <Article title="24-Hour Time and yyyy-mm-dd Date">
        <p>
          24-hour time is less confusing than 12 hours with am/pm for any kind of scheduling; the
          hour number gives the exact hour of the day you are currently at. 1 pm actually means 13
          hours of the day has passed. You still use the same number of digits, just simply without
          an extra am/pm value. There would be no confusion of 12 am vs. 12 pm as it would be 00:00
          and 12:00, which is a much more understandable difference.
        </p>

        <p>
          Writing the date should follow numerical ordering, not speech order. I am preferring
          year-month-day because the order can continue in a satisfying decreasing significance with
          hour coming after day, minute after hour, and so on. (yyyy-mm-dd hh:mm:ss: ...) Also in
          English, the mm-dd part can still be easily read in the spoken order like 01-13 being Jan
          13th.
        </p>
      </Article>

      <Article title="snake_case > PascalCase > camelCase">
        <p>
          snake_case is simple: replace all spaces with underscores, and FULL_CAPS for constants is
          easy. It is also very readable. The other ones are less appealing as some file systems
          differ in case-sensitivity and squishing words together can get messy. For urls and domain
          names where underscores are discouraged or not allowed, you should use kebab-case (snake
          case with hyphens).
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

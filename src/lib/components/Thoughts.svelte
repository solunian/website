<script lang="ts">
  import Section from "./Section.svelte";
</script>

<Section id="thoughts">
  <h2>The Metric System</h2>
  <p>celsius is better than fahrenheit</p>
  <p>cooking using tbsp, tsp, cups, gallons, etc. is ridiculous</p>
  <p>visualizing/converting is easier with distance/length/volume/weight</p>
  <p>
    caveat: weight in kg is not "weight"; it is mass; should use newtons (~x10 from kilograms)
  </p>

  <h2>Time Formatting</h2>
  <p>
    24-hr time is better than 12 hours with am/pm. You still use the same number of digits
    without an extra am/pm value. No confusion of 12 am vs 12 pm.
  </p>
  <p>
    Date should follow numerical ordering, not speech order. either year-month-day or
    day-month-year.
  </p>

  <h2>Football, Not Soccer.</h2>
  <p>this is kinda duh.</p>

  <h2>snake_case > PascalCase > camelCase</h2>
  <p>
    snake_case is simple: replace all spaces with underscores, and full caps for constants is
    easy. It is also very readable. The other ones are less appealing. Filenames should typicaly
    follow snake_case, and directories should use kebab-case (snake case with hyphens).
  </p>
</Section>
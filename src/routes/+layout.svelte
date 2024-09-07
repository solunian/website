<script lang="ts">
  import "../app.css";

  // vercel analytics snippet
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";

  inject({ mode: dev ? "development" : "production" });
</script>

<slot />

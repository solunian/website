<script lang="ts">
  import "../app.css";

  // vercel analytics snippet
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";
  import type { LayoutProps } from "./$types";

  let { children }: LayoutProps = $props();

  inject({ mode: dev ? "development" : "production" }); // for vercel analytics
</script>

{@render children()}

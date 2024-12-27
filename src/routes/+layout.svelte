<script lang="ts">
  import "../app.css";

  // vercel analytics snippet
  import { dev } from "$app/environment";
  import { inject } from "@vercel/analytics";
  import type { Snippet } from "svelte";

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();

  inject({ mode: dev ? "development" : "production" }); // for vercel analytics
</script>

{@render children?.()}

## Dev Notes

### Migration

- migrate to sveltekit v2 / svelte v5 should have no issues
- migrate to tailwindcss v4 had some weird things
  - instead of `lang="postcss"`, there's a `@import "tailwindcss/theme" theme(reference);`
    at the top right under the starting style tag
  - mouse-grab default was removed from base layer of tailwind??? idk if its a beta bug or not, added in the `src/app.css` base layer
  - modals (dialog tags) were no longer centered??? added that back with classes "self-center justify-self-center" in dialog tag
  - gradient was being weird with OKLCH color space so changed back to srgb in main page for `@solunian` text -> `bg-linear-to-r/srgb`

### Old Notes

- webkit sometimes renders css differently... check Safari or iPhone
- images resolution should be around 512 to 1024 for width and height
  - pixel art can be in png, will be a few KB
  - sketches should be jpg, can get pretty high in file size, ~300-500 KB
    - when using iPhone images, shrink by x4

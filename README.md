# website

## Dev Notes

### Migration

- migrate to sveltekit v2 / svelte v5 should have no issues
- migrate to tailwindcss v4 had some weird things
  - instead of `lang="postcss"`, there's a `@import "tailwindcss/theme" theme(reference);`
    at the top right under the starting style tag
  - mouse-pointer default was removed from base layer for buttons??? idk if its a beta bug or not, added in the `src/app.css` button base layer
  - modals (dialog tags) were no longer centered???
    - ~~classes "self-center justify-self-center" in dialog tag only worked on chrome~~
    - did some weird absolute positioning with left, top, and translate idk i just searched it up and fiddled around
    - im going to sleep. this was dumb.
    - never mind. it was still broken. dialogs just didn't cover the entire viewport for some reason. and then one modal needed padding. absolutely painful.
    - wth. dialog transitions were also broken. just implement dialogs yourself next time. that was so painful. just removed dialog transitions.
  - gradient looked a little weird/washed out with OKLCH color space so changed back to srgb in main page for `@solunian` text -> `bg-linear-to-r/srgb`

### Old Notes

- webkit sometimes renders css differently... check Safari or iPhone
- images resolution should be around 512 to 1024 for width and height
  - pixel art can be in png, will be a few KB
  - sketches should be jpg, can get pretty high in file size, ~300-500 KB
    - when using iPhone images, shrink by x4

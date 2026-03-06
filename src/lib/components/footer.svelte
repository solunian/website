<script lang="ts">
  const footer_texts = [
    "being alive.",
    "stay determined!",
    "life is hard.",
    "why, hello there!",
    "can't we be kind.",
    "hacking into the mainframe.",
    "never gonna give you up.",
    "winter is coming.",
    "is love dead.",
    "where are we?",
    "what are we doing?",
    "are we happy?",
    "hello world.",
    "did we love enough.",
    "where to now.",
    "defying entropy.",
    "wait for me.",
    "all things die.",
    "how much can your heart take.",
    "how could the world be?",
  ];
</script>

<footer
  class="flex flex-row justify-center border-t-2 border-zinc-200 bg-zinc-100 pt-2 pb-4 font-mono text-zinc-400 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-700">
  {footer_texts[Math.floor(Math.random() * footer_texts.length)]}
</footer>

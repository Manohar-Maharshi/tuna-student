<script>
  import Clipboard from "svelte-clipboard";
  let clickedReadMore = false;
  let textCopied = false;

  $: textCopied ? setTimeout(() => (textCopied = false), 1000) : textCopied;
</script>

<div class="bg-slate-800 rounded px-4 py-3 border-b border-b-gray-700">
  <div class="flex items-center justify-between w-full">
    <h2
      class="w-full flex items-center justify-between text-gray-500 mb-2 text-xs line-clamp-1"
    >
      @Manohar : 22-01-2020
    </h2>
    <div class="flex items-center space-x-3 self-start">
      <p
        on:click={() => (clickedReadMore = !clickedReadMore)}
        class="text-indigo-500 text-xs hover:underline whitespace-nowrap cursor-pointer self-start"
      >
        {#if clickedReadMore}
          Read Less
        {:else}
          Read More
        {/if}
      </p>
      <Clipboard
        text="Your Text Need to Copy"
        let:copy
        on:copy={() => (textCopied = !textCopied)}
      >
        <p
          on:click={copy}
          class="text-indigo-500 text-xs hover:underline whitespace-nowrap cursor-pointer self-start"
        >
          {#if textCopied}
            Copied!!!
          {:else}
            Copy Notes
          {/if}
        </p>
      </Clipboard>
    </div>
  </div>
  <p
    class={`${
      clickedReadMore ? "line-clamp-none" : "line-clamp-4"
    } text-gray-300 `}
  >
    Tailwind CSS is basically a utility-first CSS framework for rapidly building
    custom user interfaces. It is a highly customizable, low-level CSS framework
    that gives you all of the building blocks you need to build bespoke designs
    without any annoying opinionated styles you have to fight to override. Lorem
    ipsum dolor sit amet consectetur adipisicing elit. Animi cupiditate nulla
    dolores praesentium! Autem fugit nobis quas, alias totam quibusdam a
    inventore vero tempore corrupti! Cupiditate minus illo hic error?Lorem ipsum
    dolor sit amet consectetur adipisicing elit. Odio possimus ut dolore,
    quaerat, saepe excepturi suscipit laborum ratione velit officiis
    exercitationem reiciendis itaque consequatur cupiditate pariatur maiores
    dignissimos sequi aliquid.
  </p>
</div>

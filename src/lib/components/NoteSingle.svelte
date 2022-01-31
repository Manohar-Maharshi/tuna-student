<script>
  import Icon from "@iconify/svelte";
  import NoteBlock from "./NoteBlock.svelte";
</script>

<details>
  <summary
    class="py-3 rounded px-4 mb-2 flex flex-1 cursor-pointer items-center justify-between bg-gray-800 text-gray-400"
  >
    <div class="flex items-center justify-between w-full">
      <p class="flex items-center">
        <span class="mr-4">
          <Icon icon="fluent:note-edit-20-regular" class="h-5 w-5" />
        </span>
        <span class="inline-flex items-center space-x-2"
          >Video Title : Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Alias, rerum?
        </span>
      </p>
      <p class="text-sm">(10)</p>
    </div>
  </summary>
  <div class="mb-2 ">
    {#each Array(3) as _, idx}
      <NoteBlock />
    {/each}
  </div>
</details>

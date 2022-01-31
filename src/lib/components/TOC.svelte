<script>
  import Icon from "@iconify/svelte";
</script>

<div
  class="conatiner mx-auto px-2 sm:px-0 w-full grid place-items-center mt-10"
>
  <ul class="border border-gray-800 md:w-[50%] w-full p-2 list-decimal">
    {#each Array(10) as _, idx}
      <li
        class="flex items-center py-3 px-2 hover:bg-gray-800 rounded cursor-pointer"
      >
        <p class="flex-1 line-clamp-1">
          <span class="text-gray-500 mr-1.5">{idx + 1} &middot;</span>
          Getting Started with Web Developemnt
        </p>
        <div class="flex items-center space-x-6">
          <button class="h-6 w-6 text-gray-500 hover:text-gray-300">
            <Icon
              icon="ant-design:play-circle-outlined"
              class="w-full h-full"
            />
          </button>
        </div>
      </li>
    {/each}
  </ul>
</div>

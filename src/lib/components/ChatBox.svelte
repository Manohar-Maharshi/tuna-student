<script>
  import Icon from "@iconify/svelte";
</script>

<div class="w-full container mx-auto grid place-items-center my-10 ">
  <div
    class="flex flex-col flex-grow w-full md:max-w-xl rounded-lg min-h-screen border border-gray-800"
  >
    <p
      class="w-full flex items-center justify-end p-1.5 px-4 text-xs text-gray-500"
    >
      <span class="mr-0.5 text-green-500">&#x25cf;</span>
      150 Online
    </p>
    <div class="flex flex-col flex-grow h-0 p-4 overflow-auto scrollbar-hide">
      {#each Array(10) as _, item}
        <!-- content here -->
        <!-- Chat Bubble : Other Users -->
        <div class="flex w-full mt-2 space-x-3 max-w-xs md:max-w-sm">
          <div class="flex-shrink-0 h-10 w-10 rounded-full bg-slate-800" />
          <div>
            <div class="bg-gray-800 p-3 rounded-r-lg rounded-bl-lg">
              <p class="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <span class="text-xs text-gray-500 leading-none">2 min ago</span>
          </div>
        </div>
        <!-- Chat Bubble : Other Users -->

        <!-- Chat Bubble : Login User -->
        <div
          class="flex w-full mt-2 space-x-3 max-w-xs md:max-w-sm ml-auto justify-end"
        >
          <div>
            <div
              class="bg-indigo-700 text-white p-3 rounded-l-lg rounded-br-lg"
            >
              <p class="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
            </div>
            <span class="text-xs text-gray-500 leading-none">2 min ago</span>
          </div>
          <div class="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-600" />
        </div>
        <!-- Chat Bubble : Login User -->
      {/each}
    </div>

    <div class="bg-gray-800 p-3">
      <div class="flex items-center space-x-1">
        <input
          type="text"
          placeholder="Type your message"
          class="shadow-sm bg-gray-700 border-0 placeholder:text-gray-400 text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
        <button
          type="button"
          class=" text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <Icon icon="akar-icons:send" class="h-4 w-4" />
        </button>
      </div>
    </div>
  </div>
</div>

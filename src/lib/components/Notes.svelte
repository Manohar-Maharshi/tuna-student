<script>
  import Icon from "@iconify/svelte";
  import NoteSingle from "./NoteSingle.svelte";
</script>

<div class="container mx-auto mt-6 px-2 sm:px-0">
  <div>
    <div class="max-w-xs flex items-center mb-3">
      <label
        for="countries"
        class="text-xs font-medium  text-gray-500 dark:text-gray-400"
        >Select Video :</label
      >
      <select
        id="countries"
        class="bg-gray-800 border-0 text-gray-200 text-sm rounded focus:ring-blue-500 focus:border-blue-500 w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option>United States</option>
        <option>Canada</option>
        <option>France</option>
        <option>Germany</option>
      </select>
    </div>
    <textarea
      rows="4"
      class="block border border-gray-700 p-2 w-full text-sm rounded-lg bg-gray-800 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
      placeholder="Type your Note..."
    />

    <button
      type="button"
      class="text-white mt-4 bg-blue-700 hover:bg-blue-800 font-medium rounded text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >Post Note</button
    >
  </div>
  <div class="w-full h-px my-5 mb-2 bg-gray-800" />
  <div class="container mx-auto w-full md:max-w-[100%] px-2 sm:px-0">
    <h2 class="text-sm my-2 md:text-base text-gray-400">
      Recent Questions & Answers
    </h2>
    <div>
      {#each Array(10) as _, item}
        <NoteSingle />
      {/each}
    </div>
  </div>
</div>

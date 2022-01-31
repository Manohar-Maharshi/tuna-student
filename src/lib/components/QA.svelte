<script>
  import QaSingle from "./QASingle.svelte";
</script>

<div class="container mx-auto mt-5 px-2 sm:px-0">
  <div>
    <textarea
      id="message"
      rows="4"
      class="block border border-gray-700 p-2 w-full text-sm rounded-lg bg-gray-800 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
      placeholder="Leave a Question..."
    />
    <button
      type="button"
      class="text-white mt-4 bg-blue-700 hover:bg-blue-800 font-medium rounded text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >Post Question</button
    >
  </div>
  <div class="w-full h-px my-5 mb-2 bg-gray-800" />
  <div class="container mx-auto w-full md:max-w-[100%] px-2 sm:px-0">
    <h2 class="mb-3 mt-2 text-gray-400">Recent Questions & Answers</h2>
    <div>
      {#each Array(10) as _, idx}
        <QaSingle />
      {/each}
    </div>
  </div>
</div>

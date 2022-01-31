<script>
  import Icon from "@iconify/svelte";

  let openAnswerBox = false;
</script>

<details>
  <summary
    class="py-3 px-4 mb-2 rounded flex flex-1 cursor-pointer items-center justify-between bg-gray-800 text-gray-400"
  >
    <p class="flex items-center">
      <span class="mr-4">
        <Icon icon="akar-icons:chat-question" class="h-5 w-5" />
      </span>
      <span class="inline-flex items-center space-x-2"
        >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
        quae accusantium cupiditate repellendus ?
        <button
          on:click={() => (openAnswerBox = !openAnswerBox)}
          class="ml-1 md:mr-0 mr-4 text-gray-400 hover:text-gray-200"
          ><Icon icon="ep:edit-pen" /></button
        ></span
      >
    </p>
    <small class="text-gray-500">@Manohar/20-1-2022</small>
  </summary>
  <div class="mb-2">
    {#each Array(3) as _, idx}
      <div class="bg-slate-800 px-4 py-3 border-b border-b-gray-700">
        <h2
          class="w-full flex items-center justify-between text-gray-500 mb-2 text-xs"
        >
          <span>
            <Icon icon="ri:question-answer-line" class="h-5 w-5" />
          </span>
          <span>@Maharshi/22-1-2022</span>
        </h2>
        <p class="text-gray-300 ">
          Tailwind CSS is basically a utility-first CSS framework for rapidly
          building custom user interfaces. It is a highly customizable,
          low-level CSS framework that gives you all of the building blocks you
          need to build bespoke designs without any annoying opinionated styles
          you have to fight to override.
        </p>
      </div>
    {/each}
  </div>
</details>
{#if openAnswerBox}
  <div class="mb-3">
    <textarea
      id="message"
      rows="4"
      class="block border border-gray-700 p-2 w-full text-sm rounded-lg bg-gray-800 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
      placeholder="Answer Question..."
    />
    <button
      type="button"
      class="text-white mt-3 bg-blue-700 hover:bg-blue-800 font-medium rounded text-sm px-5 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >Post Answer</button
    >
  </div>
{/if}

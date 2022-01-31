<script>
  import Icon from "@iconify/svelte";
  import CourseCard from "$lib/components/CourseCard.svelte";
</script>

<svelte:head>
  <title>Courses | Tuna</title>
</svelte:head>

<div class="container mx-auto w-full py-10 px-4 sm:px-0">
  <div>
    <div class="relative">
      <div
        class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
      >
        <Icon icon="akar-icons:search" class="w-5 h-5 text-gray-400" />
      </div>
      <input
        type="search"
        id="email-adress-icon"
        class="text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5  bg-gray-800 border-gray-700 placeholder-gray-400 text-white"
        placeholder="Search Courses"
      />
    </div>
    <fieldset
      class="my-4 flex flex-col md:flex-row items-start md:items-center justify-between"
    >
      <legend class="sr-only">Filter Options</legend>
      <div class="flex-1 flex items-center space-x-4">
        <div class="flex items-center">
          <input
            id="filter-option-1"
            type="radio"
            name="enrolls"
            value="New"
            class="w-4 h-4 focus:ring-2 focus:ring-indigo-600 focus:bg-indigo-600 bg-gray-700"
            aria-labelledby="filter-option-1"
            aria-describedby="filter-option-1"
            checked
          />
          <label
            for="filter-option-1"
            class="block ml-2 text-sm font-medium text-gray-300"
          >
            New Courses
          </label>
        </div>
        <div class="flex items-center">
          <input
            id="filter-option-2"
            type="radio"
            name="enrolls"
            value="Most"
            class="w-4 h-4 focus:ring-2 focus:ring-indigo-600 focus:bg-indigo-600 bg-gray-700"
            aria-labelledby="filter-option-2"
            aria-describedby="filter-option-2"
          />
          <label
            for="filter-option-2"
            class="block ml-2 text-sm font-medium text-gray-300"
          >
            Most Enrolled Courses
          </label>
        </div>
      </div>
      <div class="md:w-fit w-full flex items-center space-x-2 md:mt-0 mt-3">
        <label
          for="categories"
          class="text-sm font-medium text-gray-400 whitespace-nowrap"
          >Select Category :</label
        >
        <select
          id="categories"
          class="w-full md:inline border text-sm rounded p-1 bg-gray-700 border-gray-700 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option selected>All</option>
          <option>Web Development</option>
          <option>Frontend</option>
          <option>Backend</option>
          <option>Cloud Computing</option>
          <option>Environmental Science</option>
        </select>
      </div>
    </fieldset>
  </div>
  <div class="container mx-auto w-full h-[2px] bg-gray-800" />
  <div class="flex items-center justify-center flex-wrap gap-7 mt-8">
    {#each Array(20) as _, index}
      <CourseCard link={index} />
    {/each}
  </div>
</div>

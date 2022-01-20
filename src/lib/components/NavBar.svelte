<script>
	import { page } from "$app/stores"
	import Icon from '@iconify/svelte';
</script>


<nav class="border-gray-700 md:border-0 border-b px-3 sm:px-4 py-3 bg-gray-800">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    	<a href='/' class="flex items-center space-x-1.5">
		    <div class="w-7 h-7 rounded-full bg-indigo-500 grid place-items-center">
		      <Icon icon="mdi:desk-lamp"  class="w-5 h-5"/>
		    </div>
    	  <span class="self-center text-lg text-indigo-500 font-semibold whitespace-nowrap ">
    	    Tuna
    	  </span>
    	</a>
    <div class="flex items-center md:order-2">
      <button
        type="button"
        class="flex mr-2 md:ml-7 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-indigo-500"
        id="user-menu-button"
        aria-expanded="false"
        data-dropdown-toggle="dropdown"
      >
        <span class="sr-only">Open user menu</span>
        <img
          class="w-8 h-8 rounded-full object-cover"
          src="https://static.remove.bg/remove-bg-web/a6eefcd21dff1bbc2448264c32f7b48d7380cb17/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png"
          alt="user photo"
        />
      </button>
      <div
        class="hidden z-50 my-4 text-base list-none rounded divide-y divide-gray-100 shadow text-gray-200 bg-gray-900 divide-gray-700"
        id="dropdown"
      >
        <div class="py-3 px-4">
          <span class="block text-sm text-white">
            Bonnie Green
          </span>
          <span class="block text-sm font-medium truncate text-gray-400">
            name@flowbite.com
          </span>
        </div>
        <ul class="py-1" aria-labelledby="dropdown">
          <li>
            <a
              href="/"
              class="block py-2 px-4 text-sm hover:bg-gray-600 text-gray-200 hover:text-white"
            >
              Your Profile
            </a>
          </li>
          <li>
            <a
              href="/"
              class="block py-2 px-4 text-sm hover:bg-gray-600 text-gray-200 hover:text-white"
            >
              Your Courses
            </a>
          </li>
          <li>
            <a
              href="/"
              class="block py-2 px-4 text-sm hover:bg-gray-600 text-gray-200 hover:text-white"
            >
              Your Tests
            </a>
          </li>
          <li>
            <a
              href="/"
              class="block py-2 px-4 text-sm hover:bg-gray-600 text-gray-200 hover:text-white"
            >
              Your Podcasts
            </a>
          </li>
        </ul>
        <div class="py-1 px-4 w-full">
            <button class="w-full flex items-center space-x-1 justify-center py-2 text-sm  text-gray-400 hover:text-white">
             	<Icon icon="ant-design:logout-outlined" /><span>Log Out</span>
            </button>
        </div>
      </div>
      <button
        data-collapse-toggle="mobile-menu-2"
        type="button"
        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="mobile-menu-2"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
		<Icon icon="dashicons:menu-alt" class="w-5 h-5" />
      </button>
    </div>
    <div
      class="hidden justify-end items-center w-full md:flex md:flex-1 md:w-auto md:order-1"
      id="mobile-menu-2"
    >
      <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:space-y-0 space-y-1 md:mt-0 md:text-base md:font-medium">
        <li>
	          <a href='/' class={`${$page.url.pathname == '/' ? 'bg-indigo-700 md:text-indigo-500 md:font-semibold md:hover:text-indigo-500' : ''} block py-2 pr-4 pl-3 rounded md:bg-transparent text-gray-300 md:hover:text-white md:p-0`}>Home</a>
        </li>
        <li>
	          <a href='/courses' aria-current="page" class={`${$page.url.pathname == '/courses' ? 'bg-indigo-700 md:text-indigo-500 md:font-semibold md:hover:text-indigo-500' : ''} block py-2 pr-4 pl-3 rounded md:bg-transparent text-gray-300 md:hover:text-white md:p-0`}>Courses</a>
        </li>
        <li>
	        <a href='/tests' aria-current="page" class={`${$page.url.pathname == '/tests' ? 'bg-indigo-700 md:text-indigo-500 md:font-semibold md:hover:text-indigo-500' : ''} block py-2 pr-4 pl-3 rounded md:bg-transparent text-gray-300 md:hover:text-white md:p-0`}>Tests</a>
        </li>
        <li>
          	<a href='/podcasts' aria-current="page" class={`${$page.url.pathname == '/podcasts' ? 'bg-indigo-700 md:text-indigo-500 md:font-semibold md:hover:text-indigo-500' : ''} block py-2 pr-4 pl-3 rounded md:bg-transparent text-gray-300 md:hover:text-white md:p-0`}>Podcasts</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
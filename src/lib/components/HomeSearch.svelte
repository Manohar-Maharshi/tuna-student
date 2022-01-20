<script>
	import Icon from '@iconify/svelte';
</script>

<div class="w-full container mx-auto py-14 pb-20 md:pb-[9rem] px-2 sm:px-0">
	<div class="w-full grid place-items-center">
		<div class="w-full md:max-w-[70%]">
			<h1 class="text-center text-4xl md:text-5xl font-semibold">Search</h1>
			<p class="py-4 text-base md:text-xl leading-normal text-center text-gray-400">Note that unlike containers you might have used in other frameworks, Tailwind’s container does not center itself automatically and does not have any built-in horizontal padding.</p>
		</div>
		<div class="w-full md:max-w-[80%] mt-5 md:mt-8">
			<div class="relative">
			  <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
			    <Icon icon="akar-icons:search" class="w-5 h-5 text-gray-400"/>
			  </div>
			  <input type="search" id="email-adress-icon" class="text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2.5  bg-gray-800 border-gray-700 placeholder-gray-400 text-white" placeholder="Search Courses" />
			</div>
		</div>	
	</div>
</div>
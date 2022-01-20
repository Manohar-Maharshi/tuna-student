<script>
	import Icon from '@iconify/svelte';
</script>
<div class="md:mx-0 mx-2  sm:max-w-[230px] bg-gray-800 max-h-[15.2rem] rounded flex flex-col items-center justify-between">
	<div class="w-full h-[6rem]">
		<img class="w-full h-full object-cover rounded" src="https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" alt="Hello" />
	</div>
	<div class="p-1.5 flex-col flex-col justify-between px-2 w-full h-full flex-2">
		<div class="pt-1 text-[0.6rem] flex items-center space-x-1 text-gray-400 ">
			<p class="inline-block uppercase bg-indigo-600 rounded-full px-1.5 text-gray-200 text-center">beginner</p>
			<span>&bull;</span>
			<p class="inline-block uppercase border border-blue-600 rounded-full px-1.5 text-blue-200 text-center font-semibold">4.5</p>
			<span>&bull;</span>
			<p class="text-xs truncate">Manohar Maharshi</p>
		</div>
		<div class="my-1.5 mt-1 mb-2">
			<h2 class="line-clamp-2 my-1 font-semibold text-slate-300 text-sm ">Here is a lighter version of the library for detecting the user's device type alternative</h2>
			<p class="truncate mt-1 text-xs text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, minus.</p>
		</div>
		<div class="text-[0.6rem] flex items-center justify-between space-x-1 text-gray-400 ">
			<h1 class="text-lg text-gray-200 font-semibold">&#8377; 10,000</h1>
			<div class='cursor-pointer h-8 w-8 group hover:bg-gray-500 rounded-lg grid place-items-center' data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom">
				<Icon class="h-5 w-5 group-hover:text-white" icon="akar-icons:arrow-right" />
			</div>
		</div>
	</div>
</div>
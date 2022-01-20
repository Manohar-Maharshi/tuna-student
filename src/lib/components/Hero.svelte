<script>
	import Icon from '@iconify/svelte';
	let stats = [
		{
			"title":'Courses',
			'number':100,
			'icon':'simple-icons:bookstack'
		},
		{
			"title":'Videos',
			'number':500,
			'icon':'akar-icons:airplay-video'
		},
		{
			"title":'Tutors',
			'number':30,
			'icon':'fa-solid:chalkboard-teacher'
		},
		{
			"title":'Students',
			'number':250,
			'icon':'icons8:student'
		}
	]
</script>


<main class="container mx-auto w-full py-20 pt-14 px-4 sm:px-0">
	<div class="w-full md:w-[70%]">
		<h1 class="text-4xl md:text-7xl font-bold leading-normal md:leading-normal" >Exprerience Digital Learning with <span class="text-indigo-500">Tuna</span></h1>
		<p class="py-4 text-base md:text-xl leading-normal md:text-left text-center text-gray-400">Note that unlike containers you might have used in other frameworks, Tailwind’s container does not center itself automatically and does not have any built-in horizontal padding.</p>
	</div>
	<div class="flex items-center flex-wrap md:space-y-0 space-y-3 md:space-x-5 mt-9">
		{#each stats as { title,icon,number } (title)}
			<section class="flex items-center justify-between border rounded border-gray-700 shadow p-4 h-[6.5rem] w-full md:w-[16rem]">
				<div>
					<h3 class="text-gray-400">{title}</h3>
					<p class="text-3xl">{number}+</p>
				</div>
				<div class="w-11 h-11">
					<Icon icon={icon} class="w-full h-full" />
				</div>
			</section>
		{/each}
	</div>
</main>
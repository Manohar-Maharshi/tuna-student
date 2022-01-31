<script>
	import Hero from '$lib/components/Hero.svelte'
	import Features from '$lib/components/Features.svelte'
	import HomeSearch from '$lib/components/HomeSearch.svelte'
</script>

<svelte:head>
	<title>Home | Tuna</title>
</svelte:head>

<main>
	<Hero />
	<div class="container mx-auto w-full h-[2px] bg-gray-800"></div>
	<Features />
	<div class="container mx-auto w-full h-[2px] bg-gray-800"></div>
	<HomeSearch />
	<div class="container mx-auto w-full h-[2px] bg-gray-800"></div>
</main>
<script>
	import CourseCard from './CourseCard.svelte'
	import { Swiper, SwiperSlide } from 'swiper/svelte';
	import { Navigation } from 'swiper';
	import 'swiper/css';
	import 'swiper/css/navigation';

	const responsive = {
	  superLargeDesktop: {
	    breakpoint: { max: 4000, min: 3000 },
	    items: 6
	  },
	  desktop: {
	    breakpoint: { max: 3000, min: 1024 },
	    items: 5,
	  },
	  tablet: {
	    breakpoint: { max: 1024, min: 464 },
	    items: 2
	  },
	  mobile: {
	    breakpoint: { max: 464, min: 0 },
	    items: 2,
	    slidesToSlide: 1
	  }
	};

	const breakpoints = {
	  "320": {
	    "slidesPerView": 2,
	  },
	  "375": {
	    "slidesPerView": 2,
	  },
	  "425": {
	    "slidesPerView": 2,
	  },
	  "640": {
	    "slidesPerView": 2,
	  },
	  "768": {
	    "slidesPerView": 3,
	  },
	  "1024": {
	    "slidesPerView": 5,
	  },
	  "1440": {
	    "slidesPerView": 5,
	  },
	  "2560": {
	    "slidesPerView": 6,
	  }
	};
</script>
	<div class="w-full container mx-auto py-14 pb-24 px-2 sm:px-0">
		<div>
			<h3 class="mb-3 text-xl font-semibold">Top Courses</h3>
			<div>
				<Swiper
					spaceBetween={20}
					slidesPerView={5}
					breakpoints={breakpoints}
				>
					{#each Array(10) as _, index}
				    	<SwiperSlide>
				    		<CourseCard link={index} />
				    	</SwiperSlide>
					{/each}
				</Swiper>
			</div>
		</div>
		<div class="mt-5">
			<h3 class="mb-3 text-xl font-semibold">Trending Courses</h3>
			<div>
				<Swiper
					spaceBetween={20}
					slidesPerView={5}
					breakpoints={breakpoints}
				>
					{#each Array(10) as _, index}
				    	<SwiperSlide>
				    		<CourseCard link={index} />
				    	</SwiperSlide>
					{/each}
				</Swiper>
			</div>
		</div>
	</div>
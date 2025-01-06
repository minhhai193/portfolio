<script setup>
import GTitle from "./GTitle.vue";
</script>

<template>
	<GTitle text="EDUCATION" data-aos="fade-up" data-aos-offset="300" />
	<div class="lg:grid lg:grid-cols-2 gap-5 lg:space-y-0 space-y-10">
		<div
			class="p-10 bg-[#fafafa1a] hover:bg-white transition hover:text-black space-y-10"
			data-aos="fade-right"
			data-aos-offset="200"
		>
			<i class="fa-solid fa-graduation-cap fa-3x"></i>
			<div class="space-y-2">
				<p class="text-2xl font-bold">Ton Duc Thang University</p>
				<p>
					<i class="fa-solid fa-building mr-2"></i>Bachelor's degree in Computer
					Science
				</p>
				<p>
					<i class="fa-regular fa-calendar-days mr-2"></i>2017/08 - 2022/05
				</p>
			</div>
		</div>
		<div
			class="p-10 bg-[#fafafa1a] hover:bg-white transition hover:text-black space-y-10"
			data-aos="fade-left"
			data-aos-offset="200"
		>
			<i class="fa fa-book service-icon fa-3x"></i>
			<div class="space-y-2">
				<p class="text-2xl font-bold">Languages</p>
				<p><i class="fa-regular fa-star mr-2"></i>Vietnamese</p>
				<p><i class="fa-regular fa-star mr-2"></i>English</p>
				<ul class="list-disc pl-5">
					<li>Reading, Writing: Good</li>
					<li>Speaking, Listening: Normal</li>
				</ul>
			</div>
		</div>
	</div>
</template>

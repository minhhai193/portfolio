<script setup>
import LeftInfo from "@/components/LeftInfo.vue";
import About from "@/components/About.vue";
import Technical from "@/components/Technical.vue";
import Experience from "@/components/Experience.vue";
import PersonalProjects from "@/components/PersonalProjects.vue";
import Education from "@/components/Education.vue";
import { onMounted, onUnmounted, ref } from "vue";

const sectionActive = ref();

const checkSectionInView = () => {
	const sections = document.querySelectorAll("section");
	const scrollY = window.scrollY;

	sections.forEach((section) => {
		const sectionTop = section.offsetTop;
		const sectionBottom = sectionTop + section.offsetHeight;

		if (
			scrollY >= sectionTop - window.innerHeight / 2 &&
			scrollY <= sectionBottom - window.innerHeight / 2
		) {
			section.classList.add("active");
			sectionActive.value = section;
		} else {
			section.classList.remove("active");
		}
	});
};

onMounted(() => {
	window.addEventListener("scroll", checkSectionInView);
	checkSectionInView();
});

onUnmounted(() => {
	window.removeEventListener("scroll", checkSectionInView);
});
</script>

<template>
	<div id="container" class="bg-[#111827] min-h-screen">
		<div id="particles-js"></div>
		<LeftInfo :section-active="sectionActive" />

		<div
			class="md:w-[calc(100%-360px)] lg:w-[calc(100%-500px)] ml-auto md:mr-[40px] lg:mr-[80px]"
		>
			<section
				id="section1"
				class="space-y-10 border-[#fafafa40] border-b-4 p-16 px-5"
			>
				<About />
			</section>

			<section
				id="section2"
				class="space-y-10 border-[#fafafa40] border-b-4 p-16 px-5"
				data-aos="fade-up"
				data-aos-offset="300"
			>
				<Technical />
			</section>

			<section
				id="section3"
				class="space-y-10 border-[#fafafa40] border-b-4 p-16 px-5"
			>
				<Experience />
			</section>

			<section
				id="section4"
				class="space-y-10 border-[#fafafa40] border-b-4 p-16 px-5"
			>
				<PersonalProjects />
			</section>

			<section id="section5" class="space-y-10 border-[#fafafa40] p-16 px-5">
				<Education />
			</section>
		</div>
	</div>
</template>

<style scoped>
#container {
  overflow: hidden;
	background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.5)),
		url(../public/page-bg.jpg) no-repeat center center fixed;
}

@media screen, (max-width: 767px) {
	#container {
		background: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.5)),
			url(../public/page-bg.jpg) no-repeat center center fixed;
		background-size: cover;
	}
}
</style>

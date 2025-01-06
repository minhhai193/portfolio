<script setup>
import GTitle from "./GTitle.vue";
import { ref } from "vue";

const projectList = ref([
	{
		title: "E-commerce",
		image: "ecommerce.png",
		linkSrc: "https://github.com/minhhai193/E-commerce",
		linkDemo: "https://minhhai193.github.io/E-commerce/",
		details: [
			"<b>Teamsize: </b>1",
			"<b>Position: </b>Front-end Developer",
			"<b>Feature:</b><br>Login, Logout, Search by product name, Filter by categories, Cart, Automatically send email to customer after order, Pagination, Detail product.",
			"<b>REST Api:</b><br><a class='text-white hover:text-primary transition' href='https://fakeapi.platzi.com/en/about/introduction/' target='_blank'>https://fakeapi.platzi.com/en/about/introduction/</a>",
			"<b>Swagger:</b><br><a class='text-white hover:text-primary transition' href='https://api.escuelajs.co/docs#/' target='_blank'>https://api.escuelajs.co/docs#/</a>",
		],
		technicals: [
			"Vue3",
			"Vite",
			"Tailwind",
			"Typesciprt",
			"Axios",
			"Pinia",
			"EmailJS",
			"js-cookie",
			"Swiper",
			"vue-router",
			"vue3-toastify",
			"vuejs-paginate-next",
		],
	},
]);
</script>

<template>
	<GTitle text="PERSONAL PROJECTS" data-aos="fade-up" data-aos-offset="300" />
	<div class="space-y-6">
		<div
			v-for="(item, index) in projectList"
			data-aos="fade-up"
			data-aos-offset="300"
		>
			<div class="project-item bg-white w-full pb-[45%] relative" :key="index">
				<img
					src="../assets/images/ecommerce.png"
					class="w-full h-full object-cover object-top absolute top-0 left-0"
				/>
				<div
					class="project-button absolute flex gap-3 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
				>
					<a
						:href="item?.linkSrc"
						target="_blank"
						class="text-[#d2d2d2] cursor-pointer rounded-full flex items-center justify-center border border-[#d2d2d2] w-14 h-14 hover:border-white hover:text-white transition"
					>
						<i class="fa-solid fa-code fa-xl"></i>
					</a>
					<a
						:href="item?.linkDemo"
						target="_blank"
						class="text-[#d2d2d2] cursor-pointer rounded-full flex items-center justify-center border border-[#d2d2d2] w-14 h-14 hover:border-white hover:text-white transition"
					>
						<i class="fa-solid fa-eye fa-xl"></i>
					</a>
				</div>
			</div>
			<div class="space-y-3 bg-[#fafafa1a] py-8 px-6 break-all">
				<p class="text-xl font-bold">{{ item.title }}</p>
				<ul class="list-disc pl-4">
					<li v-for="(detail, index) in item?.details" :key="index">
						<div v-html="detail"></div>
					</li>
				</ul>
				<div class="flex flex-wrap gap-2 text-sm">
					<div
						v-for="(tech, index) in item?.technicals"
						:key="index"
						class="bg-white rounded-md py-1 px-3 text-black"
					>
						{{ tech }}
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style scoped>
.project-item:hover::before {
	opacity: 1;
}
.project-item::before {
	z-index: 10;
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: #00000085;
	opacity: 0;
	transition: all 0.3s ease;
}
.project-button {
	z-index: 11;
	opacity: 0;
	transition: all 0.3s ease;
}
.project-item:hover .project-button {
	opacity: 1;
}
</style>

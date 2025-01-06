<script setup>
import { watch, ref, onMounted, onUnmounted } from "vue";

const props = defineProps({
	sectionActive: {
		type: String,
		required: true,
	},
});

const leftInfoRef = ref();
const isShowMenu = ref(false);
const isOpening = ref(false);

const menus = [
	{
		text: "About",
		link: "section1",
	},
	{
		text: "Technical",
		link: "section2",
	},
	{
		text: "Experience",
		link: "section3",
	},
	{
		text: "Personal Projects",
		link: "section4",
	},
	{
		text: "Education",
		link: "section5",
	},
];

const socials = [
	{
		icon: "fa-brands fa-linkedin-in",
		link: "https://www.linkedin.com/in/minh-h%E1%BA%A3i-nguy%E1%BB%85n-b7826a2b7/",
	},
	{
		icon: "fa-brands fa-github",
		link: "https://github.com/minhhai193",
	},
	{
		type: "mail",
		icon: "fa-regular fa-envelope",
		link: "nmhai1903@gmail.com",
	},
];

const setMenuActive = (section) => {
	menus.forEach((item) => {
		item.isActive = false;
		if (item.link === section) {
			item.isActive = true;
		}
	});
};

const handleClickOutside = (event) => {
	if (isOpening.value && !leftInfoRef.value.contains(event.target)) {
		isShowMenu.value = false;
		isOpening.value = false;
	} else {
		isOpening.value = true;
	}
};

watch(
	() => props.sectionActive,
	(newVal) => {
		setMenuActive(newVal.getAttribute("id"));
	}
);

onMounted(() => {
	document.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
	document.removeEventListener("click", handleClickOutside);
});
</script>
<template>
	<div
		class="fixed md:hidden top-0 left-0 p-4 rounded-br-xl bg-primary z-30"
		@click="isShowMenu = !isShowMenu"
	>
		<i v-if="!isShowMenu" class="fa-solid fa-bars fa-xl"></i>
		<i v-if="isShowMenu" class="fa-solid fa-x fa-xl"></i>
	</div>
	<div
		ref="leftInfoRef"
		:class="{ 'left-[0]': isShowMenu }"
		class="left-info z-20 fixed py-6 top-0 lg:left-[80px] h-screen overflow-auto w-[270px] left-[-270px] md:left-0 space-y-6 text-center bg-[#582861b3] transition-all"
	>
		<div
			class="mx-auto w-[140px] rounded-full overflow-hidden h-[140px] bg-white"
		>
			<img
				src="../assets/images/avatar.jpg"
				class="w-[120%] h-[120%] object-contain"
			/>
		</div>

		<div class="space-y-1">
			<p class="text-2xl font-bold">NGUYEN MINH HAI</p>
			<p class="italic">Front-end Developer</p>
			<p class="text-sm italic">03-6789-6503</p>
			<p class="text-sm italic">District 3, Ho Chi Minh City</p>
		</div>

		<ul class="flex justify-center items-center gap-2">
			<li v-for="(social, index) in socials" :key="index">
				<a
					:href="social.type === 'mail' ? `mailto:${social.link}` : social.link"
					class="flex items-center justify-center text-white bg-[#0003] w-9 h-9 transition hover:bg-white hover:text-primary"
					target="_blank"
				>
					<i :class="social.icon"></i>
				</a>
			</li>
		</ul>

		<ul class="border-b border-white">
			<li v-for="menu in menus">
				<a
					:href="`#${menu.link}`"
					:class="menu.isActive ? 'bg-white text-primary' : 'text-white'"
					class="block p-4 hover:text-primary hover:bg-white transition border-t border-white"
					>{{ menu.text }}</a
				>
			</li>
		</ul>
	</div>
</template>
<style scoped>
.left-info::-webkit-scrollbar {
	width: 8px;
}

.left-info::-webkit-scrollbar-thumb {
	background-color: #480454;
	border-radius: 10px;
	border: 3px solid #582861;
}

.left-info::-webkit-scrollbar-thumb:hover {
	background-color: #480454;
}

.left-info::-webkit-scrollbar-track {
	background: #582861;
}

.left-info::-webkit-scrollbar-track-piece {
	background: #582861;
}
</style>

<script setup>
import GTitle from "./GTitle.vue";

const languages = [
	{
		text: "HTML5",
		src: "html",
	},
	{
		text: "CSS3",
		src: "css",
	},
	{
		text: "Bootstrap",
		src: "bootstrap",
	},
	{
		text: "Tailwind",
		src: "tailwind",
	},
	{
		text: "Javascript",
		src: "js",
	},
	{
		text: "Typescript",
		src: "typescript",
	},
	{
		text: "Jquery",
		src: "jquery",
	},
	{
		text: "PHP",
		src: "php",
	},
	{
		text: "Wordpress",
		src: "wordpress",
	},
	{
		text: "ReactJS",
		src: "react",
	},
	{
		text: "Vue3",
		src: "vue",
	},
];

const tools = [
	{
		text: "Bitbucket",
		src: "bitbucket",
	},
	{
		text: "Sourcetree",
		src: "sourcetree",
	},
	{
		text: "Slack",
		src: "slack",
	},
	{
		text: "Github",
		src: "github",
	},
	{
		text: "Swagger",
		src: "swagger",
	},
	{
		text: "Figma",
		src: "figma",
	},
	{
		text: "Docker",
		src: "docker",
	},
];
</script>

<template>
	<GTitle text="PROGRAMMING LANGUAGES " />
	<ul class="flex flex-wrap items-center justify-center gap-6">
		<li
			v-for="(item, index) in languages"
			class="w-[60px] relative technical-item"
			:key="index"
		>
			<span class="block">
				<img :src="`portfolio/src/assets/images/${item.src}.png`" />
			</span>
			<div
				class="z-10 technical-tooltip hidden absolute bottom-[105%] left-[50%] translate-x-[-50%] bg-[#312d2d] p-2 text-xs"
			>
				{{ item.text }}
			</div>
		</li>
	</ul>
	<GTitle text="TOOLS" />
	<ul class="flex flex-wrap items-center justify-center gap-6">
		<li
			v-for="(item, index) in tools"
			class="w-[60px] h-[60px] relative technical-item"
			:key="index"
		>
			<span class="block h-full">
				<img :src="`portfolio/src/assets/images/${item.src}.png`" class="w-full h-full object-contain" />
			</span>
			<div
				class="z-10 technical-tooltip hidden absolute bottom-[105%] left-[50%] translate-x-[-50%] bg-[#312d2d] p-2 text-xs"
			>
				{{ item.text }}
			</div>
		</li>
	</ul>
</template>
<style scoped>
.technical-item:hover > .technical-tooltip {
	display: block;
}
</style>

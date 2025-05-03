<template>
    <section>
        <div class="a-container flex my-5 md:my-10 items-center lg:w-[90%] flex-col lg:flex-row gap-4">
        <div class="w-full lg:w-1/2">
            <p>Hi, I am</p>
            <h1 class=" text-5xl md:text-6xl lg:text-7xl font-[Poppins]">Abdiel Kengne</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus aliquid minima unde dolorem officia, totam assumenda nisi reiciendis officiis sequi deleniti expedita, veritatis fugit aliquam aut dolores nihil ducimus veniam.</p>
            <div class="my-4 grid items-center grid-cols-1 md:grid-cols-2  gap-4 ">
                <template v-for="l in littleabout" :key="l.id">
                    <div>
                    <span class="font-[Poppins] text-xl font-bold mb-2">{{ l.title }}</span>
                    <p>{{ l.subtitle }}</p>
                </div>
                </template>
            </div>
            <button class=" bg-blue-600 hover:bg-blue-500 hidden lg:flex text-white">Download CV</button>
        </div>
        <div class="w-full lg:w-1/2">
            <NuxtImg src="/Images/heroblue.png"/>
        </div>
        </div>
    </section>
</template>
<script setup lang="ts">
const littleabout=ref([
    {
        id:1,title:'UI/UX Specialist', subtitle:'A seasoned UI/UX Strategist dedicated to bridging creativity'
    },
    {
        id:2,title:'Graphic Designer',subtitle:'Designing appealing and impactful graphics.'
    },
   /* {
        id:3,title:'Canada',subtitle:'Based'
    }*/
])
</script>
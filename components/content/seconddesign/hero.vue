<template>
    <section>
        <div class="flex  md:my-0 lg:my-10 items-center lg:px-10 justify-center flex-col lg:flex-row gap-4">
        <div class="w-full a-container  lg:w-1/2 ">
            <p ref="heroSection">Hi, I am</p>
            <h1 class=" text-5xl mb-5 md:text-6xl lg:text-7xl font-[Poppins]">Abdiel Kengne</h1>
            <p>I am a curious, enthusiastic, and visionary frontend web developer, graphic designer, and UI/UX specialist with a creative mindset for
                 crafting impactful experiences.</p>
            <div class="my-4 grid items-center grid-cols-1 md:grid-cols-2  gap-4 ">
                <template v-for="l in littleabout" :key="l.id">
                    <div>
                    <span class=" text-xl font-bold mb-2">{{ l.title }}</span>
                    <p>{{ l.subtitle }}</p>
                </div>
                </template>
            </div>
            <button class=" bg-blue-600 hover:bg-blue-500 hidden lg:flex text-white">Download CV</button>
        </div>
        <div class="w-full lg:a-container lg:w-1/2">
            <NuxtImg src="/Images/heroblue.png" alt="Aesthetic image of graphic design elements"/>
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
        id:2,title:'Creative Visualist',subtitle:'Designing appealing and impactful graphics.'
    },
   /* {
        id:3,title:'Canada',subtitle:'Based'
    }*/
])
const{dealWithIntersects} =useUsefulData()
const heroSection=ref(null)
const isHeroVisible=useElementVisibility(heroSection)
watch(isHeroVisible,(newVal)=>{
     if(newVal===true){
       dealWithIntersects(1)
     }
})
</script>
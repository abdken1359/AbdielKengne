<template>
    <section class="bg-blue-50 border-y-1 border-gray-200">
        
        <div class="a-container py-5 ">
           <UITitles text="About" link="#about"/>
            <section class="grid grid-cols-1 lg:grid-cols-2  gap-4 items-center">
            <div>
            <NuxtImg src="/Images/youngman.png" class=" md:w-[70%] lg:w-[90%] outline-2 outline-sky-600" alt="Young man"/>
        </div>
        <div>
           <h2>Who am I?</h2>
            <p ref="aboutsection" id="about" class="mb-4">I’m a self-taught developer with a strong curiosity for how things work and
                 a deep interest in building for the web. What began as a hobby quickly grew into a focused journey of learning and creating. I’ve spent countless hours exploring online tutorials, experimenting with small projects, and developing my problem-solving mindset. I enjoy the process of turning ideas into real, usable experiences and continuously push myself to learn,
                 improve, and build with purpose.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <section>
            <h2>Passions</h2> 
           <ul>
            <li>💻 Programming</li>
            <li>⚽ Soccer</li>
            <li>🎶 Music</li>
           
           </ul>
        </section>
        <section>
            <h2>Qualities</h2> 
            <ul>
                <li>🔍 Details Oriented</li>
                <li>⏰ Time Management</li>
                <li>🧠 Pragmatism</li>
            </ul>
        </section>
        </div>
            
        </div>
        <div class="hidden">
            <h2 >Skills</h2>
            <div class="grid grid-cols-1 grid-rows-1 md:grid-rows-2 md:grid-cols-2 gap-4 items-center">
                <template v-for="s in skills" :key="s.id">
                <div class="flex gap-4 items-center justify-center">
                    <p class="w-1/4">{{ s.name }}</p>
                    <div class="w-3/4 p-2 bg-gray-300"></div>

                </div>
               </template>
            </div>
           
        </div>
    </section>
        
           
        </div>
        
    </section>
</template>
<script setup lang="ts">
interface Skills{
    id:number,
    name:string,
    color:string,
    length:number
}
const {dealWithIntersects}=useUsefulData()
const aboutsection=ref(null)
const isAboutVisible=useElementVisibility(aboutsection)
watch(isAboutVisible,(newVal)=>{
    if(newVal===true){
        dealWithIntersects(2)
    }
})
const skills=ref<Skills[]>([
    {
         id:1,
         name:'HTML',
         color:'orange-500',
         length:95,
    },
    {
         id:2,
         name:'CSS',
         color:'blue-500',
         length:85,
    },
    {
         id:3,
         name:'Javascript',
         color:'yellow-500',
         length:90,
    }
])
</script>
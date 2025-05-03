<template>
    <section class="bg-gray-50 border-y-1 border-gray-200">
        
        <div class="a-container py-5 ">
            <h1 class="a-container" >About</h1>
            <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
            <div>
            <NuxtImg src="/Images/youngman.png" class=" outline-2 outline-sky-600"/>
        </div>
        <div>
           <h2>Bio</h2>
            <p>I’m a self-taught developer with a strong curiosity for how things work and
                 a deep interest in building for the web. What began as a hobby quickly grew into a focused journey of learning and creating. I’ve spent countless hours exploring online tutorials, experimenting with small projects, and developing my problem-solving mindset. I enjoy the process of turning ideas into real, usable experiences and continuously push myself to learn,
                 improve, and build with purpose.</p> 
        </div>
        <div>
            <h2 ref="aboutsection">Skills</h2>
        </div>
    </section>
        
           
        </div>
        
    </section>
</template>
<script setup lang="ts">
const {dealWithIntersects}=useUsefulData()
const aboutsection=ref(null)
const isAboutVisible=useElementVisibility(aboutsection)
watch(isAboutVisible,(newVal)=>{
    if(newVal===true){
        dealWithIntersects(2)
    }
})
console.log(isAboutVisible.value)
</script>
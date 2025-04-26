<style scoped>
@keyframes animateHero {
    0%{
        opacity: 0;
        transform: translateY(50px);
        filter: blur(10px);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
    }
}
.animateHero{
    animation: animateHero 1s ease ;
}
</style>
<template>
    <header class="h-screen bg-[url('/Images/space_b.png')] a-bg-background overflow-hidden bg-fixed">
      
        <div class="m-auto text-center  a-container animateHero">
        <h1 class="text-primary font-extrabold text-6xl md:text-8xl lg:text-8xl mt-22">ABDIEL KENGNE</h1>
        <p class="w-full md:w-2/3 lg:w-1/2 mx-auto text-white text-lg md:text-xl lg:text-2xl">Curious, enthusiastic, and visionary frontend web developer and graphic designer.</p>
         <button type="button" class="bg-teal-400 mx-auto rounded-xl w-2/3 md:w-1/3 lg:w-1/5
         text-black hover:bg-teal-300 md:py-3 active:bg-teal-400">Download Resume</button>
    </div>
    </header>
</template>
<script setup lang="ts">
const hasUserScrolled=ref(false)

</script>
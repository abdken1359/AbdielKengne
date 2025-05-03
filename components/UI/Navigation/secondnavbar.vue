<template>
    <nav class="flex items-center overflow-hidden sticky top-0 h-16 px-6 md:px-10 lg:px-16">
        <div class="mr-auto">
          <NuxtLink to="/" class="font-bold  flex items-center flex-row justify-center gap-4">
            <NuxtImg src="/akfav.svg" alt="Ak logo" class=" w-8 md:w-8"/><div class=" text-md md:text-xl">
                <span>abdiel</span><span class="text-blue-800"> Kengne</span></div>
        </NuxtLink>  
        </div>
        <div class="mx-auto hidden md:flex justify-center flex-1 items-center">
            <template v-for="n in navLinks" :key="n.id">
                <NuxtLink :to="n.href" class="mr-4 hover:text-blue-600">{{ n.name }}</NuxtLink>
            </template>
            
        </div>
        <div class="hidden ml-auto md:flex">
            <button class="bg-violet-600 hover:bg-violet-500  text-white rounded-md">Download CV</button>
        </div>
    </nav>
</template>
<script setup lang="ts">
const {navLinks}=useUsefulData()
</script>
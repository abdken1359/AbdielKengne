<template>
    <nav class="flex items-center bg-white overflow-hidden sticky top-0 h-16 px-6 md:px-10 lg:px-16 z-20">
        <div class="mr-auto">
          <NuxtLink to="/" class="font-bold  flex items-center flex-row justify-center gap-4">
            <NuxtImg src="/akfav.svg" alt="Ak logo" class=" w-8 md:w-8"/><div class=" text-lg md:text-xl">
                <span>abdiel</span><span class="text-blue-600"> Kengne</span></div>
        </NuxtLink>  
        </div>
        <div class="mx-auto hidden lg:flex justify-center flex-1 items-center">
            <template v-for="n in navLinks" :key="n.id">
                <NuxtLink :to="n.href" class="mr-4 hover:text-blue-600" :class="n.isActive?'text-blue-600':''">{{ n.name }}</NuxtLink>
            </template>
            
        </div>
        <div class="hidden ml-auto lg:flex">
            <button class="bg-blue-600 hover:bg-blue-500  text-white ">Download CV</button>
        </div>
        <div class="flex items-center ml-auto lg:hidden">
            <button aria-label="Open menu"> <Icon name="ri:menu-fill" class="text-2xl"/></button>
        </div>
    </nav>
</template>
<script setup lang="ts">
const {navLinks}=useUsefulData()
</script>
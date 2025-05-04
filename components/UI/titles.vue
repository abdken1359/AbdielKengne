<template>
    <div class="group w-max mt-5 sm:mb-14 lg:mb-12 lg:my-10">

        <h2 
        class="relative after:absolute after:w-1/2 after:h-3 after:bg-blue-500 after:-bottom-4 after:left-0"
        ><span class="mr-2 group-hover:text-blue-500 hidden transition-all duration-100
              ">#</span><NuxtLink :href="link" class="group-hover:translate-y-10">{{ text }}</NuxtLink></h2>
    </div>
</template>
<script setup lang="ts">
defineProps({
    text:{
        type:String,
        required:true
    },
    link:{
        type:String,
        required:true
    }
})
</script>
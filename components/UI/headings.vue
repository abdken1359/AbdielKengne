<template>
    <div>
        <h1 class="text-primary leading-14 lg:leading-16 text-5xl lg:text-6xl w-full md:w-3/4 mb-10">{{ title }}</h1>
        <p class="text-lg lg:text-xl mb-10">{{ subtitle }}</p>
    </div>
</template>
<script setup lang="ts">
defineProps({
    title:{
        type:String,
        required:true
    },
    subtitle:{
        type:String,
        required:true,
    }
})
</script>
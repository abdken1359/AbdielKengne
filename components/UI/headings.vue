<template>
    <div>
        <h1 class="text-primary  text-4xl md:text-5xl w-full md:w-3/4 mb-10">{{ title }}</h1>
        <p class=" lg:text-lg mb-10">{{ subtitle }}</p>
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
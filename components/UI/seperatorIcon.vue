<template>
    <div class="my-10 text-center a-container" :id="id">
        <Icon name="heroicons:arrow-down" class="text-2xl text-primary motion-safe:animate-bounce"/>
    </div>
</template>
<script setup lang="ts">
defineProps({
    id:{
        type:String,
        required:true
    }
})
</script>
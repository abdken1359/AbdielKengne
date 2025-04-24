<template>
    <div>
        <ContentMainHero/>
        <ContentMainAbout/>
       <div style="margin-top: 1000px;">
        <h1>Hello world</h1>
       </div>
    </div>
</template>
<script setup lang="ts">
   useHead({
    title:'AK',
    
   })
   definePageMeta({
    pageTransition:{
        name:'blur'
    }
   })
</script>
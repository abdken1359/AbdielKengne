<template>
    <div>
        <ContentMainHero/>
        <ContentMainAbout/>
        <ContentMainSkills/>
         <ImageModal/>

       
    </div>
</template>
<script setup lang="ts">
import ImageModal from '~/components/UI/imageModal.vue';

   useHead({
    title:'AK',
    
   })
   definePageMeta({
    pageTransition:{
        name:'blur'
    }
   })
</script>
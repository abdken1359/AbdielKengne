<template>
    <div>
        <ContentMainHero/>

        <ContentMainAbout/>
        <UISeperatorIcon id="skills"/>
        <ContentMainSkills />
        <UISeperatorIcon id="services"/>
        <ContentMainServices/>
        <UISeperatorIcon id="showcase"/>
        <ContentMainShowcase/>
         <ImageModal/>
         <UIMainLightbox/>

       
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
    },
    layout:'secondlayout'
   })
</script>
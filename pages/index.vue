<template>
    <div>
        <ContentSeconddesignHero/>
        <ContentSeconddesignAboutsection/>
        <ContentSeconddesignSkills/>
        <ContentSeconddesignServices/>

    </div>
</template>
<script lang="ts" setup>
import { ContentSeconddesignServices } from '#components';

useSeoMeta({
    title:'Abdiel Kengne',
    ogTitle:'Abdiel Kengne',
    description:'Hello, I am Abdiel Kengne, a curious. enthousisatic, and visionary web and graphic designer.',
    ogDescription:'Hello, I am Abdiel Kengne, a curious. enthousisatic, and visionary web and graphic designer.',
    ogImage:'/akog.png',
    ogUrl:'https://abdielkengne.netlify.app',
    ogType:'website',
    ogSiteName:'Abdiel Kengne',
    ogLocale:'en_US'
})
</script>


<template>
    <section id="showcase" class="a-container">
        <UITitles text="Showcase" link="#showcase" color="after:bg-indigo-500"/>
        <UIShowcaseTab ref="showcaseSection"/>
    </section>
</template>
<script setup lang="ts">
const useful=useUsefulData()
const showcaseSection=ref(null)

const isShowcaseSectionVisible=useElementVisibility(showcaseSection)
watch(isShowcaseSectionVisible,(newVal)=>{
         if (newVal===true){
            useful.dealWithIntersects(5)
         }
})

</script>
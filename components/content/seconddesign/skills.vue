<template>
     <section class="a-container py-2" id="skills">
        <UITitles text="Skills" color="after:bg-indigo-500" link="#skills"/>
        <p ref="skillsSection">Below is a list of skills which define my passion.</p>
        <UICompetenciesTab/>

    </section>
</template>
<script setup lang="ts">
const useful=useUsefulData()
const skillsSection=ref(null)
const isSkillsSectionVisible=useElementVisibility(skillsSection)
watch(isSkillsSectionVisible,(newVal)=>{
    if (newVal==true){
        useful.dealWithIntersects(3)
    }
})
</script>
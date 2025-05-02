<style>
.page-enter-active,.page-leave-active{
  transition: all 0.6s ease;
}
.page-enter-from,.page-leave-to{
  opacity: 0;
  filter: blur(10px);
}
</style>
<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout/>
  </div>
</template>
<script lang="ts" setup>
const message=ref("Hello world!")
useHead({
  htmlAttrs:{
    
    lang:'en'
  },
  link:[
    {
      rel:'icon', type:'image/svg+xml', href:'/akfav.svg'
    }
  ]
})
</script>
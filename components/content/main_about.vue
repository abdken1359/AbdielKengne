<style scoped>
.whenVisible{
    animation: whenVisible 0.6s ease;
}
@keyframes whenVisible{
    0%{
        opacity: 0;
        transform: translateY(50px);
        filter: blur(10px);
    }
    100%{
        opacity: 1;
        transform: translateY(0);
        filter: blur(0);
    }
}

</style>
<template>
    <section id="about" class="my-16 a-container " ref="target" >
        <Transition name="about">
       <section class="a-about-flex" >
       <div class="a-about-item">
        <h1 class="text-primary  a-title lg:hidden block mb-10">A Glimpse Into My Experience</h1>
        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800"
        class="rounded-xl shadow-sm shadow-gray-50 cursor-zoom-in active:scale-95"
        @click=" utils.openImageModal('https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800','test image')"/>
       </div>
       <div class="a-about-item">
        <h1 class="text-primary hidden lg:block a-title">A Glimpse Into My Experience</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil eius perspiciatis, cum eligendi error ipsa asperiores quasi delectus impedit illo sunt dignissimos aut eum quibusdam cumque voluptatibus laborum modi aliquid.</p>
       <article class=" mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          <template v-for="a in aboutBox" :key="a.id">
            <div :class="a.class" class="p-5 rounded-lg text-center">
                <span class="text-xl mb-4 block">{{ a.title }}</span>
                <span>{{ a.subtitle }}</span>
            </div>
          </template>
       </article>   
    </div>
       </section>
       </Transition>
    </section>
</template>
<script setup lang="ts">
const utils=useUtilitiesStore()
const aboutBox=ref([
    {
         id:1,title:'1+',subtitle:'Years of Experience',class:'bg-linear-to-r from-amber-500 to-amber-400 text-black hover:bg-yellow-300'
    },
    {
        id:2,title:'2+',subtitle:'Real Projects',class:'bg-linear-to-r from-blue-300 to-blue-400 text-black hover:bg-blue-200'
    },
    {
        id:3,title:'6+',subtitle:'Github Repositories',class:'bg-linear-to-r from-gray-50 to-white text-black hover:bg-white'
    },
    {
        id:4,title:'10+',subtitle:'Technologies',class:' bg-linear-to-r from-green-500 to-green-400  text-black hover:bg-green-300'
    }
])
const target=useTemplateRef<HTMLDivElement>('target')
const targetIsVisible=useElementVisibility(target)
onMounted(()=>{
    console.log(target.value)
    console.log(targetIsVisible.value)
})

</script>
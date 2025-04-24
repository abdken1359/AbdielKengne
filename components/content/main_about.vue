<template>
    <section id="about" class="mt-10 a-container">
       <section class="a-about-flex">
       <div class="a-about-item">
        <img src="https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=800"
        class="rounded-xl shadow-sm shadow-gray-50"
        />
       </div>
       <div class="a-about-item">
        <h1 class="text-primary">A Glimpse Into My Experience</h1>
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
    </section>
</template>
<script setup lang="ts">
const aboutBox=ref([
    {
         id:1,title:'1+',subtitle:'Years of Experience',class:'bg-yellow-400 text-black hover:bg-yellow-300'
    },
    {
        id:2,title:'6+',subtitle:'Github Repositories',class:'bg-gray-50 text-black hover:bg-white'
    },
    {
        id:3,title:'10+',subtitle:'Technologies',class:'bg-green-400 text-black hover:bg-green-300'
    }
])
</script>
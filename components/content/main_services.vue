<template>
    <section id="services" class="a-container my-10">
        <UIHeadings title="Quality Services I Ought To Implement" subtitle="Enhacing your life in the best way possible is my main goal. I ought to bring my customers the best experience possible."/>
    <div class="mt-5 a-service-grid">
      <template v-for="s in services" :key="s.id">
        <article class="a-service-content">
            <div class="a-service-icon" :class="s.color"><Icon :name="s.icon" class="text-xl md:text-3xl font-black"/></div>
            <h3 class="a-service-title ">{{ s.title }}</h3>
            <p>{{ s.text }}</p>
        </article>
      </template>
    </div>
    </section>
</template>
<script setup lang="ts">
const services=[
    {
        id:1,color:'bg-cyan-500 hover:shadow-violet-100',icon:'fe:star',title:'Static Website Design',text:'Developing and enhancing static Portfolios, Blogs, and Online documentations.',
    },
    {
        id:2,color:'bg-pink-500',icon:'fe:heart',title:'Digital Creations',text:'Designing Logos, Brands, Social Media Graphics,Resumes, etc',
    },
    {
        id:2,color:'bg-purple-500',icon:'fe:bolt',title:'Accessibility Audits',text:'Implementing accessibility solutions to make the digital space inclusive to everyone.',
    },
    
]
</script>
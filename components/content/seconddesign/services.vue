<template>
    <section class="bg-teal-50 mt-5 border-y-1 border-gray-200" id="services" >
        <div class="a-container">
            <UITitles text="Services" link="#services" color="after:bg-teal-400" ref="servicesSection"/>
            <p class="mb-5">My goal is to deliver suitable and high quality services to my clients.</p>
            <section class="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3">
                <template v-for="s in services" :key="s.id">
                    <div class="p-4 rounded-sm bg-white hover:-translate-y-1.5  shadow-md hover:shadow-lg">
                        <div class="p-3 w-1/5 text-center flex items-center justify-center text-white
                         rounded-sm" :class="`bg-${s.color}-500`">
                            <Icon :name="s.icon" class="text-lg"/>
                        </div>
                        <div class="mt-4">
                            <span class="text-xl md:text-2xl font-bold" :class="`text-${s.color.toString()}-500`">{{ s.title }}</span>
                              <p class="mt-4">{{ s.description }}</p>
                        </div>
                    </div>
                </template>
            </section> 
            </div>
    </section>
</template>
<script setup lang="ts">
interface Services{
    id:number,
    icon:string,
    color:string,
    title:string,
    description:string

}
const services=ref<Services[]>([
    {
        id:1,
        icon:'ri:star-fill',
        color:'indigo',
        title:'Static web design',
        description:'Creating and enhancing accessible and user friendly static Portfolios, Online documentations, and Blogs.'
    },
    {
        id:2,
        icon:'ri:heart-fill',
        color:'rose',
        title:'Digital creations',
        description:'Designing logos, branding materials, social media graphics, resumes, and other visual assets.'
    },
    {
        id:3,
        icon:'ri:eye-fill',
        color:'emerald',
        title:'Brand visuals',
        description:'Designing consistent and impactful visual assets like iconography, and style guides to unify your identity.'
    },
    {
        id:4,
        icon:'ri:layout-4-fill',
        color:'sky',
        title:'UI mockups',
        description:'Crafting clean, interactive UI-mockups that illustrate layout, flow, and usability prior to full development.'
    },
    {
        id:5,
        icon:'ri:pencil-fill',
        color:'orange',
        title:'Content writing',
        description:'Writing clear, engaging, and SEO-friendly content for websites, blogs, and digital platforms to support your brand voice.'
    },
    {
        id:6,
        icon:'ri:bar-chart-fill',
        color:'purple',
        title:'SEO setup',
        description:'Designing logos, branding materials, social media graphics, resumes, and other visual assets.'
    }
])
const useful=useUsefulData()
const servicesSection=ref(null)
const isServicesSectionVisible=useElementVisibility(servicesSection)
watch(isServicesSectionVisible,(newVal)=>{
    if (newVal==true){
        useful.dealWithIntersects(4)
    }
})
</script>
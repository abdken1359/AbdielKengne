<style scoped>
.tab-enter-from{
    opacity: 0;
    transform: translateY(20px);
}
.tab-enter-to,.tab-leave-from{
    opacity: 1;
    transform: translateY(0);
}
.tab-enter-active,.tab-leave-active{
    transition: all 0.6s ease;
}
</style>
<template>
    <section>
    <div class="a-tab-list my-10">
        <template v-for="t in tabButtons" :key="t.id">
            <button type="button" class="rounded-full " :class="t.isActive?'bg-indigo-600 hover:bg-indigo-600 text-white':'hover:text-indigo-600'"
            @click="switchTabs(t.id)"
            >
                {{ t.name }}</button>
        </template>

    </div>

    <Transition name="tab">
    <div v-show="tabsVisibility[0]" class="a-tab-grid">
        <template v-for="l in languagesTab" :key="l.id">
            <article class=" bg-white shadow-md hover:shadow-lg group rounded-md">
                <div>
                <NuxtImg :src="l.image" :alt="l.alt"/>
                </div>
                <div class="p-4">
                    <div class="text-xl md:text-2xl font-bold mb-4">{{ l.name }}</div>
                    <p>{{ l.description }}</p>
                    <div class="a-tag-flex">
                        <NuxtLink :href="l.link" target="_blank" class="text-blue-600 hover:underline">Visit Website <Icon name="heroicons:arrow-top-right-on-square"/></NuxtLink>
                    </div>
                </div>
            </article>
        </template>
        
    </div>
</Transition>
<Transition name="tab">
    <div v-show="tabsVisibility[1]" class="a-logo-grid">
       <template v-for="l in logosTab" :key="l.id">
    <article class="a-logo-section">
        <NuxtImg :src="l.image" class=" mx-auto" :alt="l.alt" @click="showLightBox(l.image,l.alt,logosTab)"/>
    </article>
</template>
        
    </div>
</Transition>
<Transition name="tab">
    <div v-show="tabsVisibility[2]" class="a-logo-grid">
        <template v-for="p in postersTab" :key="p.id">
            
   <article class="a-logo-section">
        <NuxtImg :src="p.image" class=" mx-auto" :alt="p.alt" @click="showLightBox(p.image,p.alt,postersTab)"/>
    </article>
          
        </template>
        
    </div>
</Transition>
    </section>
</template>
<script setup lang="ts">
const {showLightBox,closeLightBox}=useUtilitiesStore()
const showcase=ref([
    {
         id:1,type:'website',name:'MarketMind',description:'A simple market bucket list manager',
           image:'/Images/showcase/websites/marketmind.png',alt:'MarketMind Image',
           link:'https://marketmindapp.netlify.app',
           tags:[
            {
              id:10,name:'Nuxt',link:'https://nuxt.com/',color:'bg-green-500 hover:bg-green-400'
           },
           {
              id:11,name:'Vuetify',link:'https://vuetifyjs.com/en/',color:'bg-blue-500 hover:bg-blue-400'
           },
           

        ],
           color:'text-orange-400'
    },
    {
         id:2,type:'website',name:'Mathify',description:'A free online unit converter and algebra solver.',
         image:'/Images/showcase/websites/mathify.png',alt:'Mathify Image',
         link:'https://mathifyapp.netlify.app',
         tags:[
            {
              id:12,name:'Vue',link:'https://vuejs.org/',color:'bg-green-500 hover:bg-green-400.'
           },
           {
              id:13,name:'Tailwind CSS',link:'https://https://tailwindcss.com/',color:'bg-cyan-500 hover:bg-cyan-400'
           },
           

        ],
        color:'text-blue-400'
    },

    {
        id:3,type:'website',name:'Recipus',description:'Free meal recipes app.',
        image:'/Images/showcase/websites/recipus.png',alt:'Recipus Image',color:'text-yellow-400',
        link:'https://recipusapp.netlify.app'
    },

    {
        id:4,type:'logos',
        image:'/Images/showcase/logos/bear.jpg',alt:'The Great Bear Logo',inview:false,
    },
    {
        id:5,type:'logos',
        image:'/Images/showcase/logos/dg.jpg',alt:'Dylan Grayson Logo',inview:false,
    },
    {
        id:6,type:'logos',
        image:'/Images/showcase/logos/bloomnest.jpg',alt:'BloomNest Logo',inview:false,
    },
    {
        id:7,type:'logos',
        image:'/Images/showcase/logos/lila.jpg',alt:'Lila Belle Logo',inview:false,
    },
    {
        id:8,type:'logos',
        image:'/Images/showcase/logos/swiftleaf.jpg',alt:'Swift Leaf Logo',inview:false,
    },
    {
        id:9,type:'logos',
        image:'/Images/showcase/logos/aquapulse.jpg',alt:'Aquapulse Logo',inview:false,
    },
    {
        id:10,type:'logos',
        image:'/Images/showcase/logos/sage.jpg',alt:'Sage Logo',inview:false,
    },
    {
        id:11,type:'logos',
        image:'/Images/showcase/logos/tinytrail.jpg',alt:'Tinytrail Logo',inview:false,
    },
    {
        id:12,type:'logos',
        image:'/Images/showcase/logos/sunnybites.jpg',alt:'Sunny Bites Logo',inview:false,
    },
     {
        id:13,type:'posters',
        image:'/Images/showcase/posters/glamor.png',alt:'Glamor poster Logo',inview:false,
    },
    {
        id:14,type:'posters',
        image:'/Images/showcase/posters/starfashion.png',alt:'Starfashion poster Logo',inview:false,
    },

   
])
const languagesTab=computed(()=>{
    return showcase.value.filter((c)=>{
        return c.type==="website"
    })
})
const logosTab=computed(()=>{
    return showcase.value.filter((c)=>{
        return c.type==="logos"
    })
})
const postersTab=computed(()=>{
    return showcase.value.filter((c)=>{
        return c.type==="posters"
    })
})
const tabButtons=ref([
    {
        id:1,name:'Websites',isActive:true
    },
    {
        id:2,name:'Logos',isActive:false
    },
    {
        id:3,name:'Posters',isActive:false
    },
    {
        id:4,name:'Cards',isActive:false
    },


])
const tabsVisibility=ref([true,false,false])
const switchTabs=(id:number):void=>{
     switch (id){
        case 1:
            //BUTTONS CASE
            tabButtons.value[0].isActive=true
            tabButtons.value[1].isActive=false
            tabButtons.value[2].isActive=false

            //VISIBILITY CASE
            tabsVisibility.value[0]=true
            tabsVisibility.value[1]=false
            tabsVisibility.value[2]=false
            break;
        case 2:
            //BUTTONS CASE
            tabButtons.value[0].isActive=false
            tabButtons.value[1].isActive=true
            tabButtons.value[2].isActive=false

            //VISIBILITY CASE
            tabsVisibility.value[0]=false
            tabsVisibility.value[1]=true
            tabsVisibility.value[2]=false
            break;
        case 3:
            //BUTTONS CASE
            tabButtons.value[0].isActive=false
            tabButtons.value[1].isActive=false
            tabButtons.value[2].isActive=true

            //VISIBILITY CASE
            tabsVisibility.value[0]=false
            tabsVisibility.value[1]=false
            tabsVisibility.value[2]=true
            break;
        default:
            console.log('Id out of normal range')
     }


}
</script>
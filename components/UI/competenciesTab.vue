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
            <button type="button" class="rounded-lg hover:bg-neutral-900" :class="t.isActive?'bg-white hover:bg-white text-teal-900':''"
            @click="switchTabs(t.id)"
            >
                {{ t.name }}</button>
        </template>

    </div>

    <Transition name="tab">
    <div v-show="tabsVisibility[0]" class="a-tab-grid">
        <template v-for="l in languagesTab" :key="l.id">
            <article class=" bg-neutral-900 group rounded-lg">
                <div>
                <NuxtImg :src="l.image"/>
                </div>
                <div class="p-4">
                    <h3 class="font-[Inter] " >{{ l.name }}</h3>
                    <p>{{ l.description }}</p>
                </div>
            </article>
        </template>
        
    </div>
</Transition>
<Transition name="tab">
    <div v-show="tabsVisibility[1]" class="a-tab-grid">
        <template v-for="w in webTab" :key="w.id">
            <article class=" bg-neutral-900 group rounded-lg overflow-hidden">
                <div>
                <NuxtImg :src="w.image" :alt="w.alt" class="h-[250px] group-hover:scale-x-105 "/>
                </div>
                <div class="p-4">
                    <h3 class="font-[Inter]">{{ w.name }}</h3>
                    <p>{{ w.description }}</p>
                </div>
            </article>
        </template>
        
    </div>
</Transition>
<Transition name="tab">
    <div v-show="tabsVisibility[2]" class="a-tab-grid">
        <template v-for="w in designTab" :key="w.id">
            <article class=" bg-neutral-900 mx-auto group rounded-lg overflow-hidden">
                <div>
                <NuxtImg :src="w.image" :alt="w.alt" class="h-[250px] group-hover:scale-x-105 "/>
                </div>
                <div class="p-4">
                    <h3 class="font-[Inter]">{{ w.name }}</h3>
                    <p>{{ w.description }}</p>
                </div>
            </article>
        </template>
        
    </div>
</Transition>
    </section>
</template>
<script setup lang="ts">
const competencies=ref([
    {
         id:1,type:'programming',name:'HTML',description:'Standard language for structuring content on the web.',
           image:'/Images/competencies/html.webp',alt:'Javascript Image',color:'text-orange-400'
    },
    {
         id:2,type:'programming',name:'CSS',description:'Standard language for styling and visually presenting content on the web.',
         image:'/Images/competencies/css.jpeg',alt:'CSS Image',color:'text-blue-400'
    },

    {
        id:3,type:'programming',name:'Javascript',description:'Versatile, high-level programming language used to create interactive content on websites.',
        image:'/Images/competencies/javascript.jpg',alt:'Javascript Image',color:'text-yellow-400'
    },

    {
        id:4,type:'programming',name:'Typescript',description:'Typed superset of JavaScript that adds static type checking for more robust code.',
        image:'/Images/competencies/typescript.png',alt:'Typescript Image',color:'text-sky-400'
    },
    {
        id:5,type:'programming',name:'Python',description:'High-level, general-purpose programming language known for its readability and versatility.',
        image:'/Images/competencies/python.webp',alt:'Python Image',color:'text-indigo-400'
    },

    {
         id:6,type:'programming',name:'GIT',description:'Version control system to manage code changes efficiently.',
        image:'/Images/competencies/git.webp',alt:'C# Image',color:'text-violet-400'
    },
    {
         id:7,type:'web',name:'Vue JS',description:'Progressive JavaScript framework for building interactive, component-based user interfaces and single-page applications.',
        image:'/Images/competencies/web_development/vue.jpg',alt:'Vue JS Image'
    },
    {
         id:8,type:'web',name:'Nuxt',description:'High-level framework built on Vue.js that simplifies the development of server-rendered, static, and single-page web applications.',
        image:'/Images/competencies/web_development/nuxt.png',alt:'Nuxt Image'
    },
    {
         id:9,type:'web',name:'Tailwind CSS',description:'Utility-first CSS framework for rapidly building custom, responsive user interfaces directly in your markup.',
        image:'/Images/competencies/web_development/tailwind.webp',alt:'Tailwind Image'
    },
    /*{
        id:9,type:'web',name:'Vuetify',description:'Material Design component framework for Vue.js that provides pre-designed, customizable UI elements for building clean, responsive applications.',
        image:'/Images/competencies/web_development/vuetify.jpg',alt:'Vuetify Image'
    },*/
    {
        id:10,type:'web',name:'Alpine JS',description:'Lightweight JavaScript framework for adding interactivity to HTML with a minimal, declarative syntax.',
        image:'/Images/competencies/web_development/alpine.jpg',alt:'Alpine JS Image'
    },
    {
        id:11,type:'web',name:'jQuery',description:'Fast, lightweight JavaScript library that simplifies HTML manipulation, event handling, animations, and AJAX interactions.',
        image:'/Images/competencies/web_development/jQuery.jpg',alt:'jQuery Image'
    },
    {
        id:12,type:'web',name:'HTMX',description:'Modern JavaScript library that enables dynamic, AJAX-powered web interactions using simple HTML attributes.',
        image:'/Images/competencies/web_development/htmx.png',alt:'HTMX Image'
    },
    {
        id:13,type:'design',name:'Canva',description:'User-friendly graphic design platform that allows you to create visuals, presentations, and social media content.',
        image:'/Images/competencies/canva.png',alt:'Canva Image'
    }
    
])
const languagesTab=computed(()=>{
    return competencies.value.filter((c)=>{
        return c.type==="programming"
    })
})
const webTab=computed(()=>{
    return competencies.value.filter((c)=>{
        return c.type==="web"
    })
})
const designTab=computed(()=>{
    return competencies.value.filter((c)=>{
        return c.type==="design"
    })
})
const tabButtons=ref([
    {
        id:1,name:'Languages',isActive:true
    },
    {
        id:2,name:'Web Development',isActive:false
    },
    {
        id:3,name:'Design',isActive:false
    }

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
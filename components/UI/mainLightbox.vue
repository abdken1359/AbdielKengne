<style scoped>
.lightbox-enter-from,.lightbox-leave-to{
    opacity: 0;
    scale: 0.8;
}
.lightbox-enter-to,.lightbox-leave-from{
    opacity: 1;
    scale: 1;
}
.lightbox-enter-active,.lightbox-leave-active{
    transition: all 0.5s ease;
}
</style>
<template>
    <Transition name="lightbox">
    <div class="bg-black/80 fixed top-0 left-0 right-0 overflow-hidden bottom-0 z-50" 
    v-show="utils.isLightboxVisible" @click.stop="blockScroll()">
        <button class="absolute top-10 right-10 bg-white z-50" aria-label="Close Lightbox" @click.stop="utils.closeLightBox">
            <Icon name="fe:close" class="text-xl md:text-2xl lg:text-2xl"/>
        </button>
        <section class="flex align-center gap-1 md:gap-4 a-container h-[80vh] md:h-[80vh] mx-auto">
            <button class="relative text-white  h-max my-auto w-max mr-auto disabled:text-gray-400 disabled:cursor-auto flex-1
            " @click.stop="utils.previousImage()"
            :disabled="utils.isPreviousButtonDisabled"
            >
                <Icon name="fe:arrow-left" class="text-xl md:text-4xl lg:text-5xl"/>
            </button>
            <Transition name="lightbox">
            <img :src="utils.imageQueue[utils.imageLightBoxIndex]?.image" :alt="utils.imageInViewAlt" v-show="utils.isLightboxVisible" 
            class="mx-auto md:flex-1 h-[30vh]   md:h-auto my-auto md:w-1/2" @click="blockScroll()"/>
        </Transition>
            <button class="relative h-max my-auto text-white ml-auto disabled:text-gray-400 disabled:cursor-auto flex-1" 
            @click.stop="utils.nextImage()" :disabled="utils.isNextButtonDisabled">
                <Icon name="fe:arrow-right" class="text-xl md:text-4xl lg:text-5xl"/>
            </button>
            
        </section>
        <section class=" a-container hidden md:flex items-center flex-wrap justify-center gap-4">
            <template v-for="i in utils.imageQueue" :key="i.id">
                <img :src="i.image" :alt="i.alt" class=" md:w-15 cursor-pointer hover:opacity-90 md:h-15 lg:w-20 lg:h-20" 
                :class="i.inview?'':' opacity-25'"  @click.stop="utils.goToImage(i.image,utils.imageQueue)"/>
            </template>
        </section>
        <section class=" a-container md:hidden flex items-center flex-wrap justify-center gap-4">
            <template v-for="i in utils.imageQueue" :key="i.id">
                <img :src="i.image" :alt="i.alt" class=" md:w-15 cursor-pointer hover:opacity-90 w-10 h-10 md:h-15 lg:w-20 lg:h-20" 
                :class="i.inview?'':' opacity-25'"  @click.stop="utils.goToImage(i.image,utils.imageQueue)"/>
            </template>
        </section>
    </div>
</Transition>
</template>
<script setup lang="ts">

/*defineProps({
    componentImageInview:{
        type:String,
        required:true
    },
    componentImageInViewAlt:{
        type:String,
        required:true
    },
    componentImageQueue:{
        type:Array,
        required:true
    }
})*/
const utils=useUtilitiesStore();
const mobileView=computed(()=>{
    return utils.imageQueue.slice(utils.imageLightBoxIndex,2)
})
const blockScroll=()=>{
     document.documentElement.style.overflow='hidden'
}

</script>
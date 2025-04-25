<style scoped>
.modal-enter-from,.modal-leave-to{
    opacity: 0;
    transform: scale(0.8);
}
.modal-enter-to,.modal-leave-from{
    opacity: 1;
    transform: scale(1);
}
.modal-enter-active,.modal-leave-active{
    transition: all 0.3s ease;
}
</style>
<template>
    <div>
        <Transition name="modal">
    <div v-show="utils.isImageModalVisible"   class="fixed bg-gray-800/50 overflow-hidden flex items-center justify-center
     z-20 top-0 left-0 right-0 bottom-0">
       <Transition name="modal">
        <section class="w-3/4 md:w-1/2" ref="imageModal">
           <img :src="utils.imageSrc" :alt="utils.imageAlt" class=" cursor-zoom-out rounded-2xl"
           @click.stop="utils.closeImageModal()"
           />
                
        </section>
        </Transition>
    </div>
</Transition>
</div>
</template>
<script setup lang="ts">
const utils=useUtilitiesStore()
const imageModal=useTemplateRef<HTMLElement>('imageModal')
onClickOutside(imageModal,event=>utils.closeImageModal())
onMounted(()=>{
    console.log(imageModal.value)
})
</script>
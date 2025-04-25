export const useUtilitiesStore=defineStore('UtilitiesStore',()=>{
    const isImageModalVisible=ref(false)
    const imageSrc=ref('')
    const imageAlt=ref('')
    const openImageModal=(src:string,alt:string):void=>{
        isImageModalVisible.value=true
        imageSrc.value=src
        imageAlt.value=alt
        document.documentElement.style.overflow='hidden'

    }
    const closeImageModal=()=>{
        isImageModalVisible.value=false
        imageSrc.value=''
        imageAlt.value=''
        document.documentElement.style.overflow='visible'
    }
     
    return{
        isImageModalVisible,
        imageAlt,
        imageSrc,
        openImageModal,
        closeImageModal
    }
})
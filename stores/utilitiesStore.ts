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
        document.documentElement.style.overflowY='visible'
        document.documentElement.style.overflowX='hidden'
    }
     
    const isLightboxVisible=ref(false)
    const imageInView=ref<String>('/Images/space.jpg')
    const imageInViewAlt=ref<String>('heythere')
    const imageQueue=ref<Object[]>([])
    const showLightBox=(UserImageInView:string,UserImageInViewAlt:string,UserImageQueue:Object[]):void=>{
        isLightboxVisible.value=true
        imageInView.value=UserImageInView
        imageInViewAlt.value=UserImageInViewAlt
        imageQueue.value=UserImageQueue

    }
    const closeLightBox=():void=>{
        isLightboxVisible.value=false
        imageInView.value=''
        imageInViewAlt.value=''
        imageQueue.value.length=0
    }
    return{
        isImageModalVisible,
        imageAlt,
        imageSrc,
        openImageModal,
        closeImageModal,
        isLightboxVisible,
        showLightBox,
        closeLightBox,
        imageInView,
        imageInViewAlt,
        imageQueue,
    }
})
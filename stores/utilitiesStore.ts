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
    const imageLightBoxIndex=ref<Number>(0)
    const isNextButtonDisabled=computed(()=>{
        if(imageLightBoxIndex.value===imageQueue.value.length-1){
            return true
        }else{
            return false
        }
    })
    const isPreviousButtonDisabled=computed(()=>{
        if(imageLightBoxIndex.value===0){
            return true
        }else{
            return false
        }
    })
    const showLightBox=(UserImageInView:string,UserImageInViewAlt:string,UserImageQueue:Object[]):void=>{
        isLightboxVisible.value=true
        imageInView.value=UserImageInView
        imageInViewAlt.value=UserImageInViewAlt
        imageQueue.value=UserImageQueue
        imageLightBoxIndex.value=UserImageQueue.findIndex(u => u.image === UserImageInView);
        UserImageQueue.forEach(u => {
             u.image===UserImageInView?u.inview=true:u.inview=false
             

        });
        console.log(imageLightBoxIndex.value)

    }
    const nextImage=():void=>{
          imageLightBoxIndex.value+=1
          imageInView.value = imageQueue.value[imageLightBoxIndex.value].image;
          imageInViewAlt.value = imageQueue.value[imageLightBoxIndex.value].alt;
          imageQueue.value.forEach(i => {
            i.image===imageInView.value?i.inview=true:i.inview=false

                

            
          });
         
    }
    const previousImage=():void=>{
        imageLightBoxIndex.value-=1
        imageInView.value = imageQueue.value[imageLightBoxIndex.value].image;
          imageInViewAlt.value = imageQueue.value[imageLightBoxIndex.value].alt;
          imageQueue.value.forEach(i => {
            i.image===imageInView.value?i.inview=true:i.inview=false

                

            
          });
        
  }
  const goToImage=(userImageView:string,userImagesecondQueue:object[])=>{

    imageLightBoxIndex.value=userImagesecondQueue.findIndex(u => u.image === userImageView);
    imageInView.value = imageQueue.value[imageLightBoxIndex.value].image;
    imageInViewAlt.value = imageQueue.value[imageLightBoxIndex.value].alt;
    imageQueue.value.forEach(i => {
        i.image===imageInView.value?i.inview=true:i.inview=false

            

        
      });


  }
    const closeLightBox=():void=>{
        isLightboxVisible.value=false
        imageInView.value=''
        imageInViewAlt.value=''
        
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
        imageLightBoxIndex,
        nextImage,
        previousImage,
        isNextButtonDisabled,
        isPreviousButtonDisabled,
        goToImage
    }
})
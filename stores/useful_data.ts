export const useUsefulData=defineStore('UsefulData',()=>{

    const navLinks=ref([
        {
            id:1,name:'Home',to:'/',isActive:true
        },
        {
            id:2,name:'About',to:'/about',isActive:false
        },
        {
            id:3,name:'Services',to:'/',isActive:false
        },
        {
            id:4,name:'Showcase',to:'/',isActive:false
        },
        {
            id:5,name:'Contact',to:'/',isActive:false
        }

    ])
    return{
        navLinks
    }
})
export const useUsefulData=defineStore('UsefulData',()=>{
interface NavLinks{
    id:number,
    name:string,
    href:string,
    isActive:boolean
}
    const navLinks=ref<NavLinks[]>([
        {
            id:1,name:'Home',href:'#',isActive:true
        },
        {
            id:2,name:'About',href:'#about',isActive:false
        },
        {
            id:3,name:'Skills',href:'#skills',isActive:false
        },
        {
            id:4,name:'Services',href:'#services',isActive:false
        },
        {
            id:5,name:'Showcase',href:'#showcase',isActive:false
        },
        {
            id:6,name:'Contact',href:'#contact',isActive:false
        }

    ])
    const dealWithIntersects=(position:number):void=>{
        console.log(`${position} Clicked!`)
        navLinks.value.forEach((n)=>{
            n.id===position?n.isActive=true:n.isActive=false

        })
    }
    return{
        navLinks,
        dealWithIntersects,
    }
})
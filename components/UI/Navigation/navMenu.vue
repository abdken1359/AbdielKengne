<style scoped> 
/* Set the initial state */
.menu-enter-from, .menu-leave-to {
  transform: translateY(-20px);  /* Slide in/out effect */
  opacity: 0;
}

.menu-enter-to, .menu-leave-from {
  transform: translateY(0);  /* Final position */
  opacity: 1;
}

/* Active transition state */
.menu-enter-active {
  transition: all 0.5s ease;
}
.menu-leave-active{
    transition: all 0.2s ease;
}
</style>
<template>
    <Transition name="menu">
    <section class="py-4 relative text-center block lg:hidden bg-white shadow-md shadow-gray-100" v-show="useful.showNavMenu">
     <nav>
        <ul>
            
               <li v-for="n in navLinks" :key="n.id">
                <NuxtLink :href="n.href" class=" hover:text-blue-600" :class="n.isActive?'text-blue-500':''">
                    {{ n.name }}
                </NuxtLink>
            </li> 
           
        </ul>
     </nav>
     
    </section>
</Transition>
</template>
<script setup lang="ts">
const {navLinks}=useUsefulData()
const useful =useUsefulData()
</script>
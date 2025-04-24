<template>
    <nav class="a-horizontal-navbar">
        <div class="mr-auto">
          <NuxtLink to="/">
            <span class="text-teal-400 font-extrabold text-4xl">AK</span>
          </NuxtLink>
        </div>
        <div class="ml-auto hidden md:flex">
            <template v-for="n in navLinks" :key="n.id">
                <NuxtLink :to="n.to" class="mx-4 hover:text-teal-200 focus:outline-none focus:text-teal-100 focus:underline" active-class="text-teal-200 font-bold">{{ n.name }}</NuxtLink>
            </template>

        </div>

    </nav>
</template>
<script setup lang="ts">
const {navLinks}=useUsefulData()

</script>
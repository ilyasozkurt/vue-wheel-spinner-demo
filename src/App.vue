<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <div class="relative flex min-h-screen flex-col w-full justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <img src="https://play.tailwindcss.com/img/beams.jpg" alt=""
            class="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
        <div
            class="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]">
        </div>
        <div class="relative max-w-screen-xl  pt-10 pb-8 sm:mx-auto ">
            <div class="px-3 shrink-0">
                <RouterView />
            </div>
        </div>
    </div>





</template>

<script setup lang="ts">
import SearchIcon from '@/icons/SearchIcon.vue';
import WebIcon from '@/icons/WebIcon.vue';
import { onMounted, onUnmounted } from 'vue';
import { chatWindow } from './chat';

onMounted(() => chatWindow.init());
onUnmounted(() => chatWindow.destroy());
</script>

<template>
  <div
    class="
      w-screen h-screen max-h-screen
      flex flex-col
      from-white to-[#F0F4F9]
      bg-gradient-to-l z-0 overflow-hidden
    "
  >
    <!-- <HomeIndexChat></HomeIndexChat> -->

    <div
      class="-z-10 h-[120vh] w-[100vw] fixed right-1/4 top-0 bg-[#eaeef4] translate-x-full"
      style="border-radius: 600px/1000px"
    ></div>

    <img
      class="min-w-[200px] max-w-[70vw] fixed right-0 bottom-1/2 translate-y-1/2 translate-x-[15%] -z-10"
      src="@/assets/home-background.png"
      alt="home-background"
    >

    <header
      class="
        flex justify-end items-center bg-white
        h-12 space-x-10 py-2 px-8 border-b
        font-[mars] text-base text-black
      "
    >
      <a class="text-light-600">My Tickets</a>
      <a class="text-light-600">My Favourite</a>
      <a class="text-light-600">My Survey</a>
      <a class="text-light-600">Contact</a>
      <div>
        <WebIcon class="w-6 h-6"></WebIcon>
      </div>
      <div
        class="flex items-center text-base space-x-2 rounded py-1 px-2 cursor-pointer hover:backdrop-brightness-95"
        @click="$router.push('/panel')"
      >
        <img
          class="rounded-full bg-transparent w-9 h-9 "
          src="@/assets/avatar.jpeg" alt="avatar"
        >
        <span>Anne Lee</span>
      </div>
    </header>

    <header
      class="
        flex start items-center
        h-20 space-x-10 py-3 px-8
        font-[mars] text-primary-500 text-lg
      "
    >
      <div class="text-4xl mr-12 font-[mars-bold]">
        MARTA
      </div>

      <a class="text-primary-500">IT FAQ</a>
      <a class="text-primary-500">IT Knowledge Base</a>
      <a class="text-primary-500">IT Workflows</a>
      <a class="text-primary-500">IT Experts</a>
      <a class="text-primary-500">24 / 7 Supports</a>

      <div>
        <img class="w-5 h-5" src="@/assets/icons/search.png" alt="search">
      </div>
    </header>

    <main class="flex-auto flex flex-col items-start justify-center pl-8 font-[mars-bold]">
      <div class="text-3xl font-bold self-start place-self-start">
        Easy is better!
      </div>
      <div class="h-8"></div>
      <div class="text-6xl font-extrabold">
        Streamline Your <br /> IT Service & Knowledge <br /> Management
      </div>
      <div class="h-8"></div>
      <div class="text-xl font-[mars]">Create efficient and enjoyable working experience</div>

      <div class="h-8"></div>

      <div class="relative font-[mars]">
        <input
          class="
            text-base  bg-white
            bg-opacity-[.90]
            border border-transparent focus:border-link-500
            py-2 px-6 rounded-full
            w-[320px] outline-none text-black
          "
          type="text"
          placeholder="How can I help you today?"
        >

        <SearchIcon class="fill-light-200 absolute w-8 h-8 right-2 bottom-1/2 translate-y-[calc(50%+1px)]"></SearchIcon>
      </div>

      <div class="h-40"></div>
    </main>

    <footer
      class="
        flex flex-col justify-center items-center
        w-full absolute left-0 bottom-0 backdrop-blur-sm
      "
    >
      <div
        class="
          w-full h-24
          flex items-center
          space-x-12 px-8
          font-[mars-bold] pb-12
          text-xl text-center
          z-50 text-primary-500
        "
      >
        <div
          v-for="text in ['Report an Incident', 'Raise a Request', 'Share Knowledge', 'Reset Password']"
          class="flex-auto bg-white py-3 mb-4 rounded-full shadow-lg cursor-pointer hover:brightness-95"
        >
          {{ text }}
        </div>
      </div>
      <div
        class="
          flex justify-center items-center
          text-sm h-12 border-t bg-white
          w-full flex-auto font-[mars]
        "
      >
        @ 2024 Mars, Incorporated and its Affiliates. All Rights Reserved
      </div>
    </footer>
  </div>

</template>

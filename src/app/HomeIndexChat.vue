<script lang="ts" setup>
import { ref } from 'vue';

const isShow = ref(false);

const messages = ref([
  {
    role: 'assistant',
    content: 'Hi, I\'m MARS virtual assistant for all kinds of internal support related questions.',
    time: '9:58 pm'
  },
  {
    role: 'assistant',
    content: 'You can use the buttons below or just let me know how I can help you.',
    time: '9:58 pm',
  },
  {
    role: 'user',
    content: 'Create a new ticket',
    time: '9:59 pm',
  }
])
</script>

<template>
  <div class="absolute right-4 bottom-0 overflow-hidden z-50">
    <div
      @click="isShow = true"
      :class="`
        absolute right-4 bottom-12 transition-transform duration-300 border border-link-300 rounded-full
        ${isShow ? 'translate-y-[200px]' : 'translate-0'}
      `"
    >
      <img
        @click="isShow = !isShow"
        class="w-12 h-12 bg-white rounded-full hover:brightness-90 cursor-pointer"
        src="@/assets/icons/chatbot-icon.png" alt="chat-bot-button"
      >
    </div>

    <div
      :class="`
        z-50 w-[380px] h-[480px] flex transition-transform duration-300 mb-8 shadow-lg border border-light-100 rounded-lg
        ${isShow ? 'translate-y-0' : 'translate-y-[calc(100%+100px)]'}
      `"
    >
      <div class=" rounded-lg flex flex-col bg-transparent overflow-hidden">
        <header class="h-10 w-full bg-primary-600 flex items-center text-white px-6 shrink-0">
          <span>MARS Virtual Assistant</span>
          <span class="flex-auto"></span>
          <img @click="isShow = false" class="w-6 h-6 translate-x-2 cursor-pointer" src="@/assets/icons/close.png" alt="input-voice">
        </header>

        <div class="flex-auto bg-white bg-opacity-70 overflow-auto space-y-3 px-3 py-3 backdrop-blur">
          <div class="flex justify-center text-white text-xs">
            9:58 pm
          </div>
          <div
            v-for="message in messages"
            :class="`
              flex space-x-3 items-end
              ${message.role === 'assistant' ? 'justify-start' : 'justify-end'}
            `"
          >
            <img
              v-if="message.role === 'assistant'"
              class="w-10 h-10 bg-white rounded-full shrink-0 border-link-300 border"
              src="@/assets/icons/chatbot-icon.png"
              alt="role-chatbot"
            >

            <div class="bg-white px-3 py-2 rounded space-y-1">
              <div class="text-base">{{ message.content }}</div>
              <div v-if="message.role === 'assistant'" class="text-light-400 text-xs">{{ message.time }}</div>
            </div>

            <img
              v-if="message.role === 'user'"
              class="w-9 h-9 bg-white bg-opacity-30 rounded-full shrink-0"
              src="@/assets/avatar.jpeg"
              alt="role-user"
            >
          </div>
        </div>

        <footer class="h-14 w-full bg-white shrink-0 flex items-center justify-center">
          <div class="relative">
            <input
              class="
                border py-1.5 px-3 w-[260px]
                text-sm text-black
                ring-1 ring-transparent focus:ring-link-200
                rounded-l outline-none focus:border-link-500
              "
              type="text"
              placeholder="Type something here..."
            >
            <img class="w-4 h-4 absolute right-2 bottom-1/2 translate-y-1/2" src="@/assets/icons/voice.png" alt="input-voice">
          </div>
          <button class="bg-link-500 border border-link-500 py-1.5 w-20 rounded-r text-sm text-white flex items-center justify-center space-x-1">
            <span>Send</span>
            <img class="w-5 h-5 " src="@/assets/icons/send.png" alt="input-voice">
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

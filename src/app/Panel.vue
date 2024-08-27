<script lang="ts" setup>
import DashboardIcon from '@/icons/DashboardIcon.vue';
import MultiChatIcon from '@/icons/MultiChatIcon.vue';
import MeIcon from '@/icons/MeIcon.vue';
import AddUserIcon from '@/icons/AddUserIcon.vue';
import ArrowLeftIcon from '@/icons/ArrowLeftIcon.vue';
import BookIcon from '@/icons/BookIcon.vue';
import RequestIcon from '@/icons/RequestIcon.vue';
import IncidentIcon from '@/icons/IncidentIcon.vue';
import { onMounted, onUnmounted, ref } from 'vue';
import PanelLiveAgent from './PanelLiveAgent.vue';
import PanelAgentCopilot from './PanelAgentCopilot.vue';

const menus = [
  { text: 'Dashboard', icon: DashboardIcon },
  { text: 'Multi-Chat', icon: MultiChatIcon },
  { text: 'Add', icon: AddUserIcon },
  { text: 'Me', icon: MeIcon },
];

const seconds = ref(240);
let intervalId = 0;

onMounted(() => {
  intervalId = setInterval(() => seconds.value = seconds.value + 1, 1000);
});

onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<template>
  <div class="w-screen h-screen flex flex-col font-[mars] max-h-screen overflow-hidden">
    <header class="panel-header h-12 bg-primary-600 flex items-center py-2 px-8  text-white">
      <div
        class="text-3xl font-[mars-bold] cursor-pointer"
        @click="$router.push('/')"
      >
        MARTA
      </div>

      <div class="text-xl ml-4 pt-1">
        Service Operation Agent Panel
      </div>
    </header>

    <main class="flex-auto flex flex-row bg-[#F0F4F9] overflow-x-hidden overflow-y-auto gap-2 max-w-screen">
      <section class="w-[62px] h-full bg-white border-r py-8 space-y-2 shrink-0">
        <div
          v-for="(menu, index) in menus"
          :class="`
            text-[11px] py-2 space-y-1
            select-none cursor-pointer
            flex flex-col items-center
            hover:backdrop-brightness-95
            ${index === 0 ? 'text-primary-500 fill-primary-500' : 'text-light-600 fill-light-600' }
          `"
        >
          <div>
            <component class="w-6 h-6" :is="menu.icon"></component>
          </div>
          <div>{{ menu.text }}</div>
        </div>
      </section>

      <section class="w-[260px] flex flex-col h-full space-y-2 py-2 shrink-0">
        <div class="bg-white p-2 rounded">
          <div class="flex items-center space-x-2">
            <img
              class="w-8 h-8 rounded-full"
              src="@/assets/avatar.jpeg" alt="avatar"
            >
            <span class="text-lg">Anne Lee</span>

            <div class="flex-auto"></div>
            <div class="w-8 bg-light-100 h-8 translate-x-2 rounded-l-full flex items-center justify-center">
              <ArrowLeftIcon class="w-5 h-5 fill-light-500" />
            </div>
          </div>

          <div class="h-2"></div>

          <div class="flex translate-y-2 text-[13px] space-x-8">
            <div
              v-for="(menu, index) in [
                { text: 'User', icon: MeIcon },
                { text: 'Operation', icon: BookIcon },
              ]"
              :class="`
                ${index === 0 ? 'text-primary-500 border-b-2 border-b-primary-500 fill-primary-500' : 'text-light-500 fill-light-500'}
                p-1 space-x-2 select-none flex items-center cursor-pointer hover:brightness-50
              `"
            >
              <span>
                <component class="w-4 h-4" :is="menu.icon"></component>
              </span>
              <span>{{ menu.text }}</span>
            </div>
          </div>
        </div>
        <div class="bg-white p-2 rounded flex-col">
          <div class="font-bold text-base mb-2">
            Contact Information
          </div>
          <div
            v-for="info in [
              { key: 'Full Name', value: 'Anne Lee' },
              { key: 'Job Title', value: 'AI Architect' },
              { key: 'Segment', value: '-' },
              { key: 'Region', value: 'Asia - Pacific' },
              { key: 'City', value: '-' },
              { key: '', value: '' },
              { key: 'Account', value: '-' },
              { key: 'Une Mgr', value: '-' },
              { key: 'Dept', value: '-' },
              { key: 'Country', value: 'China' },
              { key: 'Site Code', value: '100453' },
            ]"
            class="flex text-[13px] text-light-600"
          >
            <template v-if="info.key">
              <span>{{ info.key }}</span>
              <span class="flex-auto"></span>
              <span>{{ info.value }}</span>
            </template>
            <hr class="w-full my-2" v-else />
          </div>
        </div>
        <div class="bg-white rounded flex-auto flex flex-col overflow-y-auto">
          <div class="mb-2 flex items-center p-2">
            <span class="font-bold text-base">Tickets</span>
            <span class="flex-auto"></span>
            <span class="cursor-pointer hover:brightness-95 text-link-700 bg-info-50 border border-info-500 rounded-full px-2 py-0.5 text-xs">
              New Call
            </span>
          </div>

          <div class="flex text-[13px] mx-2 space-x-8 text-light-500 fill-light-500 border-b">
            <div
              v-for="(menu, index) in [
                { text: 'Incidents', icon: IncidentIcon },
                { text: 'Requests', icon: RequestIcon },
              ]"
              :class="`
                ${index === 0 ? 'text-primary-500 border-primary-500 fill-primary-500' : 'border-b-transparent'}
                border-b-2 py-1 space-x-1 translate-y-[1px] cursor-pointer hover:brightness-50 flex items-center
              `"
            >
              <span>
                <component class="w-4 h-4" :is="menu.icon"></component>
              </span>
              <span>{{ menu.text }}</span>
            </div>
          </div>

          <div class="flex-auto space-y-2 overflow-auto px-2 py-2">
            <div
              v-for="card in [
                { name: 'Anne Lee', date: '2024-06-24', content: 'Cannot connect to wireless network', },
                { name: 'Anne Lee', date: '2024-06-20', content: 'When logging in SAP EEP, EPP, EAP, the page would pop up balancing error 88', },
                { name: 'Dave Lu', date: '2024-06-20', content: 'Cannot receive email in my outlook.', }
              ]"
              class="px-2 py-2 bg-white rounded border flex flex-col relative hover:bg-light-50 cursor-pointer"
            >
              <div class="absolute right-0 top-0 pl-3 pr-1 h-4 bg-link-50 text-link-500 rounded-bl-full text-xs">
                Closed
              </div>
              <div class="flex flex-row items-center space-x-2">
                <img class="w-5 h-5 rounded-full" v-if="card.name === 'Anne Lee'" src="@/assets/avatar.jpeg" alt="card-avatar">
                <img class="w-5 h-5 rounded-full" v-else src="@/assets/avatar-man.jpg" alt="card-avatar">
                <span class="text-sm">{{ card.name }}</span>
              </div>

              <div class="flex mt-2 text-light-400 text-xs">
                <span>{{ card.date }}</span>
                <span class="flex-auto"></span>
                <span>MARS Service Desk</span>
              </div>

              <div class="text-xs mt-2">
                {{ card.content }}
              </div>
            </div>
          </div>
        </div>
      </section>

      <PanelLiveAgent></PanelLiveAgent>

      <PanelAgentCopilot></PanelAgentCopilot>
    </main>
  </div>
</template>

<style lang="postcss">
.form-field {
  @apply space-y-1;

  label {
    @apply text-sm text-light-400 block;
  }

  input {
    @apply text-sm block w-full;
    @apply outline-none px-3 py-0.5 rounded;
  }
}
</style>

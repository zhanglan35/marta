<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
import PanelAgentCopilotChat from './PanelAgentCopilotChat.vue';

const messages = ref<string[]>([]);

const container = ref<HTMLElement>();

const options = [
  { text: 'Severity Detection', description: 'Identify the severity of the issue' },
  { text: 'Answer Advisory', description: 'Detect user issue and suggest answers based on KB' },
  { text: 'Triage Advisory', description: 'Suggest the triage steps of the issue to L2/L3 agents' },
  { text: 'Ticket Auto Fill', description: 'Auto fill in the information of the issue for ServiceNow Ticket' },
];

const isLoading = ref(false);

function handleSubmit(option: string) {
  messages.value.push(option);
  isLoading.value = true;
  nextTick(() => container.value?.scrollTo(0, container.value!.scrollHeight));

  setTimeout(() => {
    isLoading.value = false;
    nextTick(() => container.value?.scrollTo(0, container.value!.scrollHeight));
  }, 1000 + Math.random() * 2000);
}
</script>

<template>
  <section class="flex flex-col h-full space-y-2 py-2 w-[400px] mr-2 shrink-0">
    <div class="flex-auto bg-white rounded w-full flex flex-col overflow-auto">

      <header class="h-10 border-b flex items-center px-2 shrink-0">
        <span class="text-lg">Agent Copilot</span>
      </header>

      <section class="flex-auto flex flex-col space-y-2 overflow-auto py-2" ref="container">
        <div class="text-sm text-light-500 text-center">9:58 pm</div>

        <PanelAgentCopilotChat>
          <div class="font-bold">Summarization</div>
          <div class="h-1"></div>
          <div class="text-sm text-wrap w-full">
            Welcome to MARTA Agent Copilot. Please find the summarization of
            the recent conversation between Anne Lee and virtual agent.
          </div>
          <div class="bg-white rounded p-2 mt-2">
            <table class="w-full text-xs">
              <tr v-for="info in [
                { key: 'User Name', text: 'Anne Lee' },
                { key: 'Issue Description', text: 'Printer is not working.' },
                { key: 'Severity', text: 'P1-Critical' },
                {
                  key: 'Suggestion Solution',
                  texts: [
                    'Step 1: Check and secure all printer connections.',
                    'Step 2: Restart printer and computer.',
                    'Step 3: Run printer\'s built-in diagnostic tool.',
                  ],
                },
                {
                  key: 'Suggestion Solution',
                  links: [
                    'Printer Issue FAQ',
                    'Printer Troubleshooting Handbook',
                  ],
                },
              ]">
                <td class="text-light-400 align-top">
                  {{ info.key }}:
                </td>
                <td v-if="info.text">{{ info.text }}</td>
                <td v-else-if="info.texts">
                  <ul class="list-disc pl-3">
                    <li v-for="text in info.texts">{{ text }}</li>
                  </ul>
                </td>
                <td v-else>
                  <ul class="list-disc pl-3">
                    <li v-for="link in info.links" class=" underline text-primary-500 hover:brightness-50 cursor-pointer">
                      {{ link }}
                    </li>
                  </ul>
                </td>
              </tr>
            </table>
          </div>
        </PanelAgentCopilotChat>

        <PanelAgentCopilotChat>
          <div class="text-sm">
            You can use the quick assistance below or just let me know how I can assist you?
            <div></div>
            <a>Learn more</a>
          </div>

          <div class="space-y-2 mt-2">
            <div
              v-for="option in options"
              class="
                p-2 bg-white rounded flex items-center
                cursor-pointer hover:bg-primary-50
              "
              @click="handleSubmit(option.text)"
            >
              <div>
                <div class="text-sm">{{ option.text }}</div>
                <div class="text-xs">{{ option.description }}</div>
              </div>

              <div class="flex-auto"></div>

              <svg width="7" height="11" viewBox="0 0 7 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.39777 5.16281L0.360269 0.447189C0.344493 0.434768 0.325533 0.42705 0.305568 0.424919C0.285603 0.422788 0.265441 0.426332 0.247399 0.435143C0.229357 0.443955 0.214166 0.457676 0.203571 0.474732C0.192976 0.491787 0.187406 0.511485 0.187501 0.531564V1.56683C0.187501 1.63246 0.218305 1.6954 0.269198 1.73558L5.09063 5.50031L0.269198 9.26505C0.216966 9.30522 0.187501 9.36817 0.187501 9.4338V10.4691C0.187501 10.5588 0.290626 10.6083 0.360269 10.5534L6.39777 5.83781C6.44908 5.79779 6.4906 5.74658 6.51915 5.6881C6.5477 5.62962 6.56254 5.56539 6.56254 5.50031C6.56254 5.43523 6.5477 5.37101 6.51915 5.31253C6.4906 5.25404 6.44908 5.20284 6.39777 5.16281Z" fill="black" fill-opacity="0.85"/>
              </svg>
            </div>
          </div>
        </PanelAgentCopilotChat>

          
        <template v-for="(message, index) in messages">
          <PanelAgentCopilotChat v-if="index === messages.length - 1 && isLoading" :has-footer="false">
            <div class="animate-pulse space-y-2 py-1">
              <div class="h-2 bg-light-200 rounded"></div>
              <div class="h-2 bg-light-200 rounded"></div>
              <div class="h-2 bg-light-200 rounded w-20"></div>
            </div>
          </PanelAgentCopilotChat>
          <PanelAgentCopilotChat v-else-if="message === options[1].text">
            <div class="font-bold">Suggested Answer</div>

            <ol class="text-sm list-decimal pl-3 mt-2">
              <li>
                <span class="font-sans font-bold">Safe Mode</span>:
                Launch Outlook in Safe Mode by pressing Windows key + R,
                typing outlook.exe /safe, and hitting Enter. If it improves,
                disable add-ins one by one to find the problematic one.
              </li>
              <li>
                <span class="font-sans font-bold">Safe Mode</span>:
                Repair your Office installation via Control Panel.
                Navigate to "Programs" > "Programs and Features",
                select Microsoft Office, and choose 'Change' > 'Repair'.
              </li>
              <li>
                <span class="font-sans font-bold">Update Software</span>:
                Ensure Outlook and Windows are fully updated.
                Check Outlook updates under File > Office Account > Update Options.
                Update Windows through Settings > Update & Security.
              </li>
            </ol>
            <div class="text-sm mt-2">Reference:</div>
            <div class="flex flex-col text-sm">
              <a>Outlook Issue FAQ V1.1</a>
              <a>Outlook Product Document 2.1</a>
            </div>
          </PanelAgentCopilotChat>
          <PanelAgentCopilotChat v-else-if="message === options[3].text" :has-footer="false">
            <div class="font-bold">Ticket Info</div>
            <div class="grid grid-cols-2 gap-3">
              <div class="col-span-1 form-field">
                <label>Location</label>
                <input class="" type="text" value="Signapore">
              </div>
              <div class="col-span-1 form-field">
                <label>Priority*</label>
                <input class="" type="text" value="P1-Critical">
              </div>
              <div class="col-span-2 form-field">
                <label>Issue Description</label>
                <input class="" type="text" value="Outlook freezing and Restarting">
              </div>
            </div>

            <hr class="my-3 border-dashed">

            <div class="font-bold">Business Impact</div>

            <div class="grid grid-cols-2 gap-3">
              <div class="col-span-2 form-field">
                <label>Ticket Number</label>
                <input class="" type="text" value="CS0046599">
              </div>
              <div class="col-span-2 form-field">
                <label>User Impacted</label>
                <input class="" type="text" value="Anne Lee">
              </div>
              <div class="col-span-2 form-field">
                <label>Last Working</label>
                <input class="" type="text" value="2024-08-25 9:45">
              </div>
              <div class="col-span-1 form-field">
                <label>Reported By</label>
                <input class="" type="text" value="Dave Lin">
              </div>
              <div class="col-span-1 form-field">
                <label>Resolver Team to Assign</label>
                <input class="" type="text" value="O365 Team 1">
              </div>
              <div class="col-span-2 form-field">
                <label>Contact Number & Alternative</label>
                <input class="" type="text" value="18754729754">
              </div>
            </div>

            <div class="flex justify-end mt-3">
              <span class="flex items-center space-x-2 ml-2 rounded bg-primary-600 text-white px-2 py-0.5 cursor-pointer hover:bg-primary-700">
                <span class="text-[15px]">Send</span>
              </span>
            </div>
          </PanelAgentCopilotChat>
        </template>
      </section>

      <footer class="border-t p-1.5 flex items-center space-x-3 px-3">
        <input class="border px-3 py-1 rounded outline-none text-sm flex-auto" type="text" placeholder="I want to ...">
        <svg class="w-5 h-5 cursor-pointer fill-light-700 hover:brightness-125" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.3623 9.71132L0.690467 0.349717C0.614574 0.31177 0.527521 0.302842 0.444932 0.322931C0.35327 0.345591 0.274321 0.403649 0.225373 0.484393C0.176425 0.565136 0.161466 0.661985 0.183771 0.753734L2.10788 8.61534C2.1369 8.73364 2.22395 8.82963 2.34002 8.86757L5.6369 9.99927L2.34225 11.131C2.22618 11.1711 2.13913 11.2649 2.11234 11.3832L0.183771 19.256C0.163682 19.3386 0.17261 19.4256 0.210557 19.4993C0.29761 19.6756 0.511896 19.747 0.690467 19.66L19.3623 10.3519C19.4315 10.3185 19.4873 10.2604 19.5231 10.1935C19.6101 10.0149 19.5387 9.80061 19.3623 9.71132ZM2.38466 17.0194L3.50743 12.4301L10.0967 10.1689C10.1481 10.1511 10.1905 10.1109 10.2083 10.0573C10.2396 9.96356 10.1905 9.86311 10.0967 9.82963L3.50743 7.5707L2.38913 2.99927L16.407 10.0283L2.38466 17.0194Z"/>
        </svg>
      </footer>
    </div>
  </section>
</template>

declare const chatController: any;

let isInit: boolean = false;

export const chatWindow = {
  init() {
    if (isInit) {
      document.getElementById('chat-bot')!.hidden = false;
    }

    isInit = true;
    window.onload = function () {
      (window as any).chatSettings = {
        endpoint:
          "https://sandbox.caiplatform.com/webAdapterSocket",
        path: "/backend-channel-adaptor-web/socket.io",
        assetsBasePath:
          "https://sandbox.caiplatform.com/frontend-web-chat/",
        channelAdaptorPath: "http://backend-channel-adaptor-web:11006",
        masterBotID: "21869adb-748a-4e5b-b0b7-2497ce5ca43b",
        voiceEnabled: true,
        chatbotName: "Chatbot",
        storageType: "sessionStorage",
        theme: "fsChatbotPageLoad.css",
        checkValidateLogin: false,
      };
      chatController.initChatWindow();
    
      document!.getElementById('header-label')!.innerHTML = "Virtual Assistant";
      // Hide chat-sidebar-btn
      document!.getElementById('open-converse')!.style.background = "#FFF url(caip-chat-icon.png) center no-repeat";
    };
  },

  destroy() {
    document.getElementById('chat-bot')!.hidden = true;
  }
}

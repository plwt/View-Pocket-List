
function openAPage() {
  
   browser.tabs.create({
     "url": "https://getpocket.com/my-list"
   });
}



browser.browserAction.onClicked.addListener(openAPage);
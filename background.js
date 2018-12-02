chrome.browserAction.onClicked.addListener(tab => {
  chrome.tabs.query({audible: true}, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, 'PIP');
  })
})
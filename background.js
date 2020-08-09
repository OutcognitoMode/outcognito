console.log("Loaded extension");
let block = false;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

  chrome.storage.sync.get(['nowState'], function(data) {
    block = data['nowState'];
  });
  let tabTitle = tab.title;

  console.log("i visited " + tab.title)
  
}
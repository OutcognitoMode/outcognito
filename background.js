console.log("Loaded extension");
let block = false;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  var safesite = true;
  chrome.storage.sync.get(['nowState'], function(data) {
    block = data['nowState'];
  });

    let check = tab.title;
    let url = tab.url;
    console.log(tab.title);
    console.log(tab.url);

   fetch("https://outcognito.herokuapp.com/", {
       headers: {
           mode: "no-cors",
           title: check,
           url: url,
       },
       method: "POST"
   } )
     
});





console.log("Loaded extension");
let block = false;

let lastVisitedSite = ''

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  var safesite = true;
  chrome.storage.sync.get(['nowState'], function(data) {
    block = data['nowState'];
  });

    let check = tab.title;
    let url = tab.url;

  if(url !== lastVisitedSite) {
      fetch("https://outcognito.herokuapp.com/", {
          headers: {
           'Content-Type': 'application/json',
           },
           method: "POST",
          body: JSON.stringify({
              title: check,
              url,
          }),
         
      } )
    lastVisitedSite = url
  }
     
});





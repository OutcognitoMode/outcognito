console.log("Loaded extension");
let block = false;

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

  chrome.storage.sync.get(['nowState'], function(data) {
    block = data['nowState'];
  });
  let tabTitle = tab.title;

  console.log("i visited " + tab.title)
  


});






var status = false;

window.addEventListener("DOMContentLoaded", contentLoaded(), false);
console.log("1");






function urlToStr(uri) {
  var uri_enc = encodeURIComponent(uri);
  var uri_dec = decodeURIComponent(uri_enc);
  // var res = "Encoded URI: " + uri_enc + "<br>" + "Decoded URI: " + uri_dec;
  return uri_dec;
}
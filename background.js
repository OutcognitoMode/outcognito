require("dotenv-safe").config();
const Twitter = require("twitter");

/* Init Twitter */
const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

/* Post Status Message */
client.post("statuses/update", { status: "I Love Twitter" }, function (
  error,
  tweet,
  response
) {
  if (error) throw error;
  console.log(tweet);
  console.log(response);
});

// console.log("Loaded extension");
// let block = false;

// chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
//   chrome.storage.sync.get(["nowState"], function (data) {
//     block = data["nowState"];
//   });
//   let tabTitle = tab.title;
// });

// var status = false;

// window.addEventListener("DOMContentLoaded", contentLoaded(), false);
// console.log("1");

// function urlToStr(uri) {
//   var uri_enc = encodeURIComponent(uri);
//   var uri_dec = decodeURIComponent(uri_enc);
//   // var res = "Encoded URI: " + uri_enc + "<br>" + "Decoded URI: " + uri_dec;
//   return uri_dec;
// }

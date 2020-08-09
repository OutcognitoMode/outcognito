require("dotenv-safe").config();
const express = require("express");
const Twitter = require("twitter");
const bodyParser = require("body-parser");
const cors = require("cors");

const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* Init Twitter */
const client = new Twitter({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const adjectives = [
  "shocked",
  "stoked",
  "terrified",
  "amazed",
  "dazzled",
  "curious",
  "frightened",
  "incentivized",
  "aroused",
  "elated",
  "electified",
  "excited",
  "inspired",
  "moved",
  "touched",
  "atingled",
];

const moods = [
  "#sh*t",
  "#garbage",
  "#trash",
  "#gold",
  "#insanity",
  "#creativity",
  "#goosiness",
  "#madness",
  "#bullsh*it",
  "#fakenews",
  "#realnews",
  "#propaganda",
  "#sewage",
  "#rubble",
  "#junk",
  "#dross",
  "#treasure",
];

/* POST Handler to post to twitter */
app.post("/", (req, res) => {
  // Extract data
  const { title, url } = req.body;
  console.log(`----\nIN Received: '${title}' at ${url}`);

  // Select Adjective and Mood
  const adj = adjectives[(Math.random() * adjectives.length) | 0];
  const mood = moods[(Math.random() * moods.length) | 0];

  // Formulate Tweet
  const tweet = `I'm ${adj} to be looking at ${title}. Can you believe this ${mood} at ${url}`;
  console.log(`OUT Tweeted: ${tweet}`);

  /* Post Status Message */
  client.post("statuses/update", { status: tweet }, function (error) {
    if (error) {
      console.log(`ERROR: ${error}`);
      return res.status(500);
    }
    return res.status(200).send("Opps.. Looks like Will leaked it (again)!");
  });

  res.status(200);
});

/* Start the Leaking Server */
app.listen(port, () => {
  console.log(`🚀 Accepting posts on: http://localhost:${port}`);
});

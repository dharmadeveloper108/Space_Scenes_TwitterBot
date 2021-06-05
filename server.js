const Twitter = require('twitter-lite');
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000
const getSentence = require('./space-sentence.js');
const getScene = require('./space-scene.js');

const client = new Twitter({
    subdomain: "api", 
    version: "1.1", 
    // API key
    consumer_key: process.env.TWITTER_CONS_KEY,
    // API key secret
    consumer_secret: process.env.TWITTER_CONS_SEC,
    // Access token
    access_token_key: process.env.TWITTER_ACC_TOK_KEY,
    // Access token secret
    access_token_secret: process.env.TWITTER_ACC_TOK_SEC
});

const generateTweet = async (tweet) => {
    await client.post("statuses/update", {
        status: tweet,
        auto_populate_reply_metadata: true,
    }).catch(console.log);
}

const generateSceneSentence = () => {

    let tweetElems = getScene.generateScene();

    let fullTweet = tweetElems[0] + "\n\n" + getSentence.generateSentence(tweetElems[1], tweetElems[2], tweetElems[3]);
    console.log(fullTweet);
    console.log(fullTweet.length);

    try {
        generateTweet(fullTweet).catch(console.log);
    } catch (e) {
        console.log(e);
        generateTweet(fullTweet + stars[Math.floor(Math.random() * stars.length)]).catch(console.log);
    }
}

//tweet every 3 hours
const THREEHOURS = 10800000;

app.listen(PORT, () => {
    console.log('Server running...');

    (function () {
        setInterval(function () {
            try {
                generateTweet(getScene.generateScene()).catch(console.log);
            } catch (e) {
                console.log(e);
                generateTweet(getScene.generateScene() + stars[Math.floor(Math.random() * stars.length)]).catch(console.log);
            }
        }, THREEHOURS);
    })();

    //generateSceneSentence();

    (function () {
        setInterval(function () {
            generateSceneSentence();
        }, THREEHOURS * 8);
    })();
});
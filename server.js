const Twitter = require('twitter-lite');
require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000

const client = new Twitter({
    subdomain: "api", // "api" is the default (change for other subdomains)
    version: "1.1", // version "1.1" is the default (change for other subdomains)
    // API key
    consumer_key: process.env.TWITTER_CONS_KEY,
    // API key secret
    consumer_secret: process.env.TWITTER_CONS_SEC,
    // Access token
    access_token_key: process.env.TWITTER_ACC_TOK_KEY,
    // Access token secret
    access_token_secret: process.env.TWITTER_ACC_TOK_SEC
});

const tweetNews = async (tweet) => {
    await client.post("statuses/update", {
        status: tweet,
        auto_populate_reply_metadata: true,
    }).catch(console.log);
}

const planets = [{
        "emoji": "🌎",
        "description": "globe showing Americas",
    },
    {
        "emoji": "🌞",
        "description": "sun with face"
    },
    {
        "emoji": "🌏",
        "description": "globe showing Asia-Australia"
    },
    {
        "emoji": "🌍",
        "description": "globe showing Europe-Africa"
    },
    {
        "emoji": "🌙",
        "description": "crescent moon"
    },
    {
        "emoji": "🌑",
        "description": "new moon"
    },
    {
        "emoji": "🌝",
        "description": "full moon face"
    },
    {
        "emoji": "🌚",
        "description": "new moon face"
    },
    {
        "emoji": "🌕",
        "description": "full moon"
    },
    {
        "emoji": "🌜",
        "description": "last quarter moon with face"
    },
    {
        "emoji": "🌘",
        "description": "waning crescent moon"
    },
    {
        "emoji": "🌖",
        "description": "waning gibbous moon"
    },
    {
        "emoji": "🌒",
        "description": "waxing crescent moon"
    },
    {
        "emoji": "🌔",
        "description": "waxing gibbous moon"
    },
    {
        "emoji": "🪐",
        "description": "ringed planet"
    },
];

const inhabitants = [{
        "emoji": "\ud83d\ude80",
        "description": "rocket"
    },
    {
        "emoji": "\ud83d\udef8",
        "description": "flying saucer"
    },
    {
        "emoji": "\ud83d\udc7e",
        "description": "alien monster"
    },
    {
        "emoji": "\ud83d\udc7d",
        "description": "alien"
    },
    {
        "emoji": "\ud83d\udc68\ud83c\udffb\u200d\ud83d\ude80",
        "description": "astronaut"
    },
    {
        "emoji": "\ud83d\udc68\ud83c\udffc\u200d\ud83d\ude80",
        "description": "astronaut"
    },
    {
        "emoji": "\ud83d\udc68\ud83c\udffd\u200d\ud83d\ude80",
        "description": "astronaut"
    },
    {
        "emoji": "\ud83d\udc68\ud83c\udffe\u200d\ud83d\ude80",
        "description": "astronaut"
    },
    {
        "emoji": "\ud83d\udc69\ud83c\udffb\u200d\ud83d\ude80",
        "description": "astronaut"
    },
    {
        "emoji": "\ud83d\udc69\ud83c\udffc\u200d\ud83d\ude80",
        "description": "astronaut"
    },
    {
        "emoji": "\ud83d\udc69\ud83c\udffd\u200d\ud83d\ude80",
        "description": "astronaut"
    },
    {
        "emoji": "\ud83d\udc69\ud83c\udffe\u200d\ud83d\ude80",
        "description": "astronaut"
    },
    {
        "emoji": "\ud83d\udc69\ud83c\udfff\u200d\ud83d\ude80",
        "description": "astronaut"
    },
];

const stars = [
    "⋆", "✨", "✧", "･ﾟ", ":", "*", "・",
    ".", "｡", "･ﾟ", "＊", "🌟", "˚｡",
    ":", "+", "‧̍̊", "☆", ",", "⋇", "✦",
    "★", "☆", "☾", "⋆", "・", "゜"
];

const spaces = ["\u3000", "\u2002", "\u2003", "\u2004", "\u2009", "\u200a"];

const spaceThings = [{
        "emoji": "\u2604\ufe0f",
        "description": "comet"
    },
    {
        "emoji": "\ud83c\udf0c",
        "description": "Milky Way"
    },
    {
        "emoji": "\ud83c\udf20",
        "description": "shooting start"
    },
    {
        "emoji": "\ud83d\udc99",
        "description": "blue heart"
    },
    {
        "emoji": "\ud83e\udd0d",
        "description": "white heart"
    },
    {
        "emoji": "\ud83d\udda4",
        "description": "black heart"
    },
    {
        "emoji": "\ud83d\udc8e",
        "description": "diamond"
    }
];

const generateScene = () => {

    const randomSceneArr = [];
    for (let i = 0; i < 22; i++) {
        randomSceneArr.push(stars[Math.floor(Math.random() * stars.length)]);
        //randomSceneArr.push(stars[Math.floor(Math.random() * 1)]);
    }

    for (let i = 0; i < 24; i++) {
        randomSceneArr.push(spaces[Math.floor(Math.random() * spaces.length)]);
    }

    randomSceneArr.push(inhabitants[Math.floor(Math.random() * inhabitants.length)].emoji);
    randomSceneArr.push(planets[Math.floor(Math.random() * planets.length)].emoji);

    randomSceneArr.push(spaceThings[Math.floor(Math.random() * spaceThings.length)].emoji);

    //console.log(randomSceneArr);

    const randomizedArray = shuffleArray(randomSceneArr);
    let tweet = "";
    randomizedArray.forEach(element => {
        tweet += element;
    });

    String.prototype.splice = function (idx, rem, str) {
        return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
    };

    for(let i = 0; i < 6; i++) {
        tweet = tweet.splice(Math.floor(Math.random() * 64), 0, "\n");
    }
   
    console.log(tweet);
    console.log(tweet.length);

    try {
        tweetNews(tweet).catch(console.log);
    } catch(e){
        console.log(e);
        tweetNews(tweet+".").catch(console.log);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

//tweet every 3 hours
const THREEHOURS = 10800000;

app.listen(PORT, () => {
    console.log('Server listening on port 3000...');

    (function () {
    setInterval(function () {
        generateScene();
    }, THREEHOURS);
    })();
});
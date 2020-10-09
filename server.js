const Twitter = require('twitter-lite');
require('dotenv').config();

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
        "emoji": "\ud83d\udc68\u200d\ud83d\ude80",
        "description": "astronaut"
    },
    {
        "emoji": "\ud83d\udc69\u200d\ud83d\ude80",
        "description": "astronaut"
    },
];

const stars = [
    "⋆", "✨", "✧", "･ﾟ", " : ", "*", "゜", "・",
    ".", "｡", "･ﾟﾟ", "＊", "🌟", "˚｡",
    ":..", "+", "‧̍̊", "☆", "-:", "⋇", "✦",
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
    for (let i = 0; i < 12; i++) {
        randomSceneArr.push(stars[Math.floor(Math.random() + i)]);
        //randomSceneArr.push(stars[Math.floor(Math.random() * 1)]);
    }

    for (let i = 0; i < 35; i++) {
        randomSceneArr.push(spaces[Math.floor(Math.random() + 1)]);
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

    tweetWithEscapes = tweet.splice(17, 0, "\n\n");
    tweetWithEscapes = tweetWithEscapes.splice(33, 0, "\n\n");
    tweetWithEscapes = tweetWithEscapes.splice(49, 0, "\n\n");

    console.log(tweetWithEscapes);
    console.log(tweetWithEscapes.length);
    tweetNews(tweetWithEscapes).catch(console.log);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


generateScene();
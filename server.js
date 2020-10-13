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

const generateTweet = async (tweet) => {
    await client.post("statuses/update", {
        status: tweet,
        auto_populate_reply_metadata: true,
    }).catch(console.log);
}

const planets = [{
        "emoji": "🌎",
        "description": "globe",
    },
    {
        "emoji": "🌞",
        "description": "smiling sun"
    },
    {
        "emoji": "🌏",
        "description": "globe"
    },
    {
        "emoji": "🌍",
        "description": "globe"
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
        "description": "smiling full moon"
    },
    {
        "emoji": "🌚",
        "description": "smiling new moon"
    },
    {
        "emoji": "🌕",
        "description": "full moon"
    },
    {
        "emoji": "🌜",
        "description": "last quarter moon"
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
        "emoji": "🚀",
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
        "emoji": "\ud83d\udef0\ufe0f",
        "description": "satellite"
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

const generateSentence = (inhabitant, planet, spaceThing) => {
    const sentences = [
        `You are like this ${inhabitant} cruising the galaxies. Off to the next adventure!`,
        `Somewhere, ${getArticle(inhabitant) + " " + inhabitant} and ${getArticle(spaceThing) + " " + spaceThing} are playing around in outer space. All is peaceful.`,
        `Take a deep breath. This ${planet} is watching over you. The universe is wide and beautiful.`,
        `These ${inhabitant}, ${spaceThing} and ${planet} say hi! Look up: your troubles don't seem so scary from up here.`,
        `These ${inhabitant}, ${spaceThing} and ${planet} are waving to you from outer space. If you are feeling a little down, look up!`,
        `Oh look, ${getArticle(inhabitant) + " " + inhabitant} is chasing ${getArticle(spaceThing) + " " + spaceThing} in outer space. Looks like they could be friends!`,
        `It's so quite up here! Come join these ${inhabitant}, ${spaceThing} and ${planet} whenever your planet gets a little too noisey.`,
        `With just a sprinkle of stars, ${getArticle(inhabitant) + " " + inhabitant}, ${getArticle(planet) + " " + planet} and ${getArticle(spaceThing)+ " " + spaceThing}, the universe doesn't seem so dark!`,
        `The universe is so big! Somewhere, ${getArticle(inhabitant) + " " + inhabitant}, ${getArticle(planet) + " " + planet} and ${getArticle(spaceThing)+ " " + spaceThing} have all the space they want to play around.`,
        `Breath in... breath out. This ${inhabitant} is rooting for you, along with their ${spaceThing} and ${planet} friends. You are doing great!`,
        `This ${inhabitant} is flying around, forever chasing ${getArticle(spaceThing) + " " + spaceThing}. This ${planet} has known them both since the beginning of time and can swear, it's just a game!`,
        `Hi human! I, the mighty ${inhabitant}, along with my friends ${spaceThing} and ${planet} greet you! Look for us when you need courage, we have it to spare!`,
        `Up up high in the sky, ${getArticle(inhabitant) + " " + inhabitant}, ${getArticle(planet) + " " + planet} and ${getArticle(spaceThing) + " " + spaceThing} are trying their best, just like you! We are all part of a big intergalactic family.`,
        `What are ${getArticle(inhabitant) + " " + inhabitant}, ${getArticle(planet) + " " + planet} and ${getArticle(spaceThing) + " " + spaceThing} doing together in the same sky? How would I know, I'm just a bot.`,
        `If you look up at the sky on a starry night, you might see this ${inhabitant} approaching ${getArticle(planet) + " " + planet}, while ${getArticle(spaceThing) + " " + spaceThing} watches them eagerly. Yearning really is a funny thing.`,
        `Look at this odd bunch! If ${getArticle(inhabitant) + " " + inhabitant} and ${getArticle(spaceThing) + " " + spaceThing} can be friends, you too can befriend anyone.`,
        `Be good, be kind and be happy. These ${inhabitant}, ${spaceThing} and ${planet} are sending you good vibes all the way from outer space!`
    ];

    let sentence = getRandomNoRepeats(sentences);
    return sentence;
}

const getArticle = (str) => {
    let article = "";
    const vowelRegex = '^[aieouAIEOU].*';
    let matched = str.match(vowelRegex);
    matched ? article = "an" : article = "a";
    return article;
}

const generateScene = () => {

    const randomSceneArr = [];
    for (let i = 0; i < 26; i++) {
        randomSceneArr.push(stars[Math.floor(Math.random() * stars.length)]);
    }

    for (let i = 0; i < 30; i++) {
        randomSceneArr.push(spaces[Math.floor(Math.random() * spaces.length)]);
    }

    let inhabitant = inhabitants[Math.floor(Math.random() * inhabitants.length)];
    randomSceneArr.push(inhabitant.emoji);

    let planet = planets[Math.floor(Math.random() * planets.length)];
    randomSceneArr.push(planet.emoji);

    let spaceThing = spaceThings[Math.floor(Math.random() * spaceThings.length)];
    randomSceneArr.push(spaceThing.emoji);

    const randomizedArray = shuffleArray(randomSceneArr);
    let tweet = "";
    randomizedArray.forEach(element => {
        tweet += element;
    });

    String.prototype.splice = function (idx, rem, str) {
        return this.slice(0, idx) + str + this.slice(idx + Math.abs(rem));
    };

    for (let i = 0; i < 8; i++) {
        tweet = tweet.splice(Math.floor(Math.random() * 64), 0, "\n");
    }

    console.log(tweet);
    console.log(tweet.length);
    console.log(inhabitant.description + " " + planet.description + " " + spaceThing.description);

    return [tweet, inhabitant.description, planet.description, spaceThing.description];
}

const generateSceneSentence = () => {

    let tweetElems = generateScene();

    let fullTweet = tweetElems[0] + "\n\n" + generateSentence(tweetElems[1], tweetElems[2], tweetElems[3]);
    console.log(fullTweet);
    console.log(fullTweet.length);

    try {
        generateTweet(fullTweet).catch(console.log);
    } catch (e) {
        console.log(e);
        generateTweet(fullTweet + ".").catch(console.log);
    }
}

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const getRandomNoRepeats = (array) => {
    var copy = array.slice(0);

    if (copy.length < 1) {
        copy = array.slice(0);
    }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
}

//tweet every 3 hours
const THREEHOURS = 10800000;

app.listen(PORT, () => {
    console.log('Server running...');

    (function () {
        setInterval(function () {
            try {
                generateTweet(generateScene()).catch(console.log);
            } catch (e) {
                console.log(e);
                generateTweet(generateScene() + ".").catch(console.log);
            }
        }, THREEHOURS);
    })();
    console.log(generateScene());

    generateSceneSentence();

    (function () {
        setInterval(function () {
            generateSceneSentence();
        }, THREEHOURS * 8);
    })();
});
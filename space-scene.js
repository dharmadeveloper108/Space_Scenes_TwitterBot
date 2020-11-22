const spaceConstants = require('./space-constants.js');

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const getRandomArbitrary = (min, max) => {
    return Math.random() * (max - min) + min;
}

module.exports = {
    generateScene: generateScene = () => {

        const randomSceneArr = [];
        for (let i = 0; i < 26; i++) {
            randomSceneArr.push(spaceConstants.stars[Math.floor(Math.random() * spaceConstants.stars.length)]);
        }
    
        for (let i = 0; i < 30; i++) {
            randomSceneArr.push(spaceConstants.spaces[Math.floor(Math.random() * spaceConstants.spaces.length)]);
        }
    
        let inhabitant = spaceConstants.inhabitants[Math.floor(Math.random() * spaceConstants.inhabitants.length)];
        randomSceneArr.push(inhabitant.emoji);
    
        let planet = spaceConstants.planets[Math.floor(Math.random() * spaceConstants.planets.length)];
        randomSceneArr.push(planet.emoji);
    
        let spaceThing = spaceConstants.spaceThings[Math.floor(Math.random() * spaceConstants.spaceThings.length)];
        randomSceneArr.push(spaceThing.emoji);
    
        let bigStar1 = spaceConstants.bigStars[Math.floor(Math.random() * spaceConstants.bigStars.length)];
        let bigStar2 = spaceConstants.bigStars[Math.floor(Math.random() * spaceConstants.bigStars.length)];
        randomSceneArr.push(bigStar1);
        randomSceneArr.push(bigStar2);
    
        for(let i = 0; i < getRandomArbitrary(5,12); i++) {
            randomSceneArr.push("\n");
        }
    
        const randomizedArray = shuffleArray(randomSceneArr);
        let tweet = "";
        randomizedArray.forEach(element => {
            tweet += element;
        });
    
        console.log(tweet);
        console.log(tweet.length);
        console.log(inhabitant.description + " " + planet.description + " " + spaceThing.description);
    
        return [tweet, inhabitant.description, planet.description, spaceThing.description];
    }
}
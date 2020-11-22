const getArticle = (str) => {
    let article = "";
    const vowelRegex = '^[aieouAIEOU].*';
    let matched = str.match(vowelRegex);
    matched ? article = "an" : article = "a";
    return article;
}

const getRandomNoRepeats = (array) => {
    var copy = array.slice(0);

    if (copy.length <= 1) {
        copy = array.slice(0);
    }
    var index = Math.floor(Math.random() * copy.length);
    var item = copy[index];
    copy.splice(index, 1);
    return item;
}

module.exports = {

    generateSentence: generateSentence = (inhabitant, planet, spaceThing) => {
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
}
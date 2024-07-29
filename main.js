//Creating an Object of all fortune, advice and sign words, which are the properties containing arrays
const wordsOf = {
    fortune: ['love life', 'great opportunity ahead', 'powerfull mind'],
    advice: ['not drinking', 'wakeup early', 'do meditation'],
    sign: ['sun', 'earth', 'leo']
}
//Creating a function to give random number b/w 0 to till, where till will be the last number.
function randomNumber(till){
    Math.floor(Math.random()*till);
}
//array of strings that we want to print
const message = [];
//funtion to return our message
const mixedMessage = () =>{
    const arrOfWordsOf =[];
    for(let word in wordsOf){
        arrOfWordsOf.push(word);
    }

    const seletedWord = arrOfWordsOf[randomNumber(arrOfWordsOf.length)];

    switch(seletedWord){
        case fortune:
            message.push(`You are having ${wordsOf.fortune[randomNumber(wordsOf.fortune.length)]}`);
            break;
        case advice:
            message.push(`You are adviced to ${wordsOf.advice[randomNumber(wordsOf.advice.length)]}`);
            break;
        case sign:
            message.push(`You have the sign of ${wordsOf.sign[randomNumber(wordsOf.sign.length)]}`);
            break;
    }

    return message;
}
console.log(mixedMessage());
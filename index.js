// Code your solutions in this file
const writeCardsResult = writeCards(["Guadalupe", "Ollie", "Aki"]);

function writeCards(names) {
    let messages = [];
    for (let name of names) {
        messages.push(`Thank you, ${name}, for the wonderful surprise gift!`);
    }
    return messages;
}

function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}
console.log(writeCardsResult);


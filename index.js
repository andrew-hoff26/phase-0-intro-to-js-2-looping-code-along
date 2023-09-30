// Code your solutions in this file
// for ([initialization]; [condition]; [iteration]) {
 // [loop body] }
 const gifts = ["teddy bear", "drone", "doll"];

 function wrapGifts(gifts) {
   let i = 0; // the initialization moves OUTSIDE the body of the loop!
   while (i < gifts.length) {
     console.log(`Wrapped ${gifts[i]} and added a bow!`);
     i++; // the iteration moves INSIDE the body of the loop!
   }
 
   return gifts;
 }
wrapGifts(gifts);

function writeCards(names) {
    const messages = [];
  
    for (let i = 0; i < names.length; i++) {
      const message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;
      messages.push(message);
    }
  
    return messages;
  }
  
writeCards(["Guadalupe"< "Ollie", "Aki"])

function countDown() {
    let count = 0
    while (count < 11) {
        console.log(count++)
    }
}


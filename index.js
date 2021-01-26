// Code your solutions in this file
function countDown(num) {
    while(num > -1) {
        console.log(num--);
    }
}

function writeCards(names, events) {
    let array = []
    for(let i = 0; i < names.length; i++){
        array.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`)
    }
    return array; 
}
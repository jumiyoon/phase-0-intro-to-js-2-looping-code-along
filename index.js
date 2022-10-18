

function writeCards(group) {
    let greetings = []
    for (let i = 0; i < group.length; i ++) {
        greetings.push(`Thank you, ${group[i]}, for the wonderful surprise gift!`)
    }
    return greetings
}

function countDown(number) {
    for (let i = 0; i < number+1 ; number --) {
        console.log (number)
    }
}
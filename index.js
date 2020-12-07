const db = require('./db');

function main() {

    const statesWithAnAtlanta = db.statesWithCity('atlanta');
    console.log('\n\nThere is an Atlanta in these states:')
    for (let st of statesWithAnAtlanta) {
        console.log(st);
    }
    
    console.log('\n\n============================');
    
    const statesWithAHouston = db.statesWithCity('houston');
    console.log('\n\nThere is a Houston in these states:')
    for (let st of statesWithAHouston) { // 4. AnAtlanta needed to be replaced with AHouston
        console.log(st);
    }
    
    console.log('\n\n============================');

    const statesWithATampa = db.statesWithCity('tampa'); // 2. db was missing from the function 
    console.log('\n\nThere is a Tampa in these states:')
    for (let st of statesWithATampa) { // 3. let was missing from the for loop
        console.log(st);
    }

}

main(); // 1. line 31 is needed to be run, but was commented out. 

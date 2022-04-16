console.log('hello world');   
        // commentss just for description  
const interestRate = 0.3;
console.log(interestRate);

let isApproved = true;
console.log(isApproved); // boolean

let selectedColor = null;
let person = {
        name: 'ashwin',
        age: 24
};

//Dot Notation to change the object
person.name = 'bala';

// Changing using Bracket Notation
person['name'] = 'arun';

console.log(person.name);

let sampleArray = ['red' , 'blue'];
sampleArray[2]= '1';

console.log(sampleArray.length);

function greet(identity, rnumber) {
    console.log('hello ' + identity + ' ' + rnumber);
}

greet('cas' , '12');
greet('bro' , '21');




const sentences = [
    { subject: 'JS', verb: 'is', object: 'greate' },
    { subject: 'ES6', verb: 'is', object: 'a must' },
];

// es6: destructuring an object
function say({subject, verb, object}) {
    // template strings
    console.log(`${subject} ${verb} ${object}`);
};
// es6: for..of

for( let s of sentences) {
    say(s);
};
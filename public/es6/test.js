const sentences = [
    { subject: 'JS', verb: 'is', object: 'greate' },
    { subject: 'Nodejs', verb: 'is', object: 'a must for front-end' },
];

// es6: destructuring an object
function say({subject, verb, object}) {
    // templates row
    console.log('${subject} ${verb} ${object}');
}
// es6: for..of

for(let s of sentences) {
    say(s);
}
var q = require('./index.js');

var que = new q(4);

var object1 = {"Prop":3};
var object2 = {"Prop":2};

var i = que.enqueue(object1);
var j = que.enqueue(object2);
console.log(i);
console.log(j);
console.log(que.size());
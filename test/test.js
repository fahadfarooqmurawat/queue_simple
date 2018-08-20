describe('Test queue',function(){
	var Queue = require('../index');
	var queue = null;
	var n = 123;
	var s = 'i am a string';
	var o = {foo:'bar'};
	it('create instance of Queue');
	it('length should be 0');
	it('enqueue a number and size should be 1');
	it('enqueue a string and the size should be 2');
	it('enqueue an obj and the size should be 3');
	it('queue should not be empty');
	it('peek to get the number');
	it('dequeue to get the number');
	it('peek at index 1 to get the object');
	it('dequeue to get the string');
	it('dequeue to get the obj the size should be 0');
	it('queue should be empty')
});
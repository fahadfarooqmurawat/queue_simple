class Queue 
{
	constructor(queuelengthlimit)
	{
		var limit = queuelengthlimit;
		if (limit==null || Number.isNaN(limit))	limit = Number.MAX_SAFE_INTEGER;
		Object.defineProperties(
			this,
			{
				_maxLength:{writable:false,enumerable:false,value:limit},
				_objects:{writeable:true,enumerable:true,value:new Array()}
			});
	}
}

module.exports = Queue;

Queue.prototype.isEmpty = function() {
	if (this.size() === 0) return true;
	return false;
}
Queue.prototype.size = function() {
	return this._objects.length;
}
Queue.prototype.peek = function(position) {
	if (position == Number(position)){
		if (!this._objects[position]) return null;
		return this._objects[position];
	}
	else
	{
		if (this.isEmpty()) return null;
		return this._objects[0];
	}
}
Queue.prototype.dequeue = function(){
	if (this.isEmpty())	return null;
	return this._objects.shift();
}

Queue.prototype.enqueue = function(obj) {
	if (obj && this._maxLength>this.size()) return this._objects.push(obj);
	return null;
};
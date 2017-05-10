class Queue 
{
	constructor(queuelengthlimit)
	{
		Object.defineProperties(
			this,
			{
				_maxLength:{
					writable:false,
					enumerable:false,
					value:queuelengthlimit
				},
				_objects:{
					writeable:true,
					enumerable:true,
					value:new Array()
				}
			});
	}
}
module.exports = Queue;

Queue.prototype.isEmpty = function() {
	if (this.size() == 0)
		return true;
	else
		return false;
}

Queue.prototype.size = function() {
	return this._objects.length;
}

Queue.prototype.memoryOccupied = function(){
	return 
}

Queue.prototype.peek = function(position) {
	if (position)
	{
		if (this._objects[position])
		{
			return this._objects[position];
		}
		else
		{
			return null;
		}
	}
	else
	{
		if (!this.isEmpty())
		{
			return this._objects[0];
		}
		else
		{
			return null;
		}
	}
}
Queue.prototype.dequeue = function(){
	if (this.isEmpty())
	{
		return null;
	}
	else
	{
		return this._objects.shift();
	}
}

Queue.prototype.enqueue = function(obj) {
	if (obj&&this._maxLength>this.size())
	{
		return this._objects.push(obj);
	}
	else
	{
		return null;
	}
};
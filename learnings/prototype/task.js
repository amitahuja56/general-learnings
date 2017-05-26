var Task = function(data){
	this.name=data.name;
	this.user=data.user;
}

Task.prototype.complete = function() {
	console.log('completing tasks: ' + this.name);
	this.completed = true;
};

Task.prototype.save = function() {
	console.log('saving tasks: ' + this.name);
	this.completed = true;
};
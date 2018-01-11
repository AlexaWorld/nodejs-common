// Copyright 2017, Peter Ullrich. dotup IT solutions

// getType(promise); => "[object Promise]"
module.exports.typeOf = function (obj){
	var toString = Object.prototype.toString.call(obj);
	var split = toString.split(' ');
	var name = split[1].replace("]","");
	return name;
}

module.exports.isTypeOf = function (obj, type){
	var toString = Object.prototype.toString.call(obj);
	var split = toString.split(' ');
	var name = split[1].replace("]","");
	return name === type;
}


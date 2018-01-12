class AlexaWorldAttributes {
	get [Symbol.toStringTag]() {
		return 'AlexaWorldAttributes';
	}
	constructor() {
		this.callStack = [];
	}

	GetLastIntent() {
		if (this.callStack.length <= 0)
			return "";
		else
			return this.callStack[this.callStack.length - 1];
	}

	get IsLaunched(){return this.isLaunched || false;}

	get CallStack() { return this.callStack; }
	set CallStack(value) { this.callStack = value; }

}

module.exports = AlexaWorldAttributes;
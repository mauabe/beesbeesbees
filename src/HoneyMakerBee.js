var HoneyMakerBee = function() {
	Bee.call(this);

	this.age = 10;
	this.job = 'make honey';
	this.honeyPot = 0;

	// this.color = Grub???
	// this.food = Grub???
	//eat
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);

HoneyMakerBee.prototype.constructor = HoneyMakerBee;


HoneyMakerBee.prototype.makeHoney = function (){
	return this.honeyPot += 1
};

HoneyMakerBee.prototype.giveHoney = function (){
	return this.honeyPot -= 1
};

/*
	// call the Bee superclass
	// set the prototype
	// set the constructor
// an age property that is set to 10
	// a job property that is set to make honey
???? a color property inherited from bee that is set to yellow
a food property that is inherited from grub
an eat method that is inherited from grub
	// a honeyPot property that is set to 0
	// a makeHoney method that adds 1 to that honeyBee\'s honeyPot
	// a giveHoney method that subtracts 1 from that honeyBee\'s honeyPot
*/
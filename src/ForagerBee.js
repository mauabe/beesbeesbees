var ForagerBee = function() {
	Bee.call(this);

	this.age = 10;
	this.job = 'find pollen';
	this.honeyPot = 0;
	this.canFly = true;
	this.treasureChest = [];

	//eat
	// color

};

ForagerBee.prototype = Object.create(Bee.prototype);

ForagerBee.prototype.constructor = ForagerBee;

ForagerBee.prototype.forage = function(){
	this.treasureChest.push('treasure')
};

// call the Bee superclass
// set the prototype
// set the constructor
// an age property that is set to 10
// a job property that is set to find pollen
// a color property inherited from bee that is set to yellow
// use Object.create
// use constructor


		// a food property that is inherited from grub
		// an eat method that is inherited from grub

// a canFly property that is set true
// a treasureChest property that is set to an empty array []
// a forage method that allows the bee to add a treasure to the treasureChest
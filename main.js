
const Bakery = require('./bakery.js');
const Costumer = require('./costumer.js');

const bakery = new Bakery(0.3)
const johnRich = new Costumer("John", 1, 10);
const martinPoor = new Costumer("Martin", 0.3, 1);


bakery.addCostumer(johnRich);
bakery.addCostumer(martinPoor);

bakery.bakeBreads(2)

// bake more breads, create new costumers, create new bakeries ,change their params, and then execute
// It is just a simple project with no user input just to experiment and learn about Node EventEmitter and the observer pattern :)

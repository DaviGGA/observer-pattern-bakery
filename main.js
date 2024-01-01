
const Bakery = require('./bakery.js');
const Costumer = require('./costumer.js');

const bakery = new Bakery(0.3)
const johnRich = new Costumer("John", 1, 10);
const martinPoor = new Costumer("Martin", 0.3, 1);


bakery.addCostumer(johnRich);
bakery.addCostumer(martinPoor);




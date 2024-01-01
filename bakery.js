const events = require('./events.js')
const eventEmitter = require('./event-emitter.js');

class Bakery {
    _breads;
    _costumers;
    _breadPrice;
    

    constructor(breadPrice) {
        this._breads = 0;
        this._costumers = [];
        this._breadPrice = breadPrice;
    }

    get breadPrice() {
        return this._breadPrice;
    }

    get breads() {
        return this._breads;
    }

    set breads(breads) {
        return breads
    }

    bakeBreads(breadsQuantity) {
       this._breads += breadsQuantity;
        eventEmitter.emit(events.BREAD_BAKED, breadsQuantity);
    }

    addCostumer(costumer) {
        this._costumers.push(costumer);

        eventEmitter.on(events.BREAD_BAKED, (breads) => {
            costumer.buyBread(breads);
        })
        
        costumer.bakery = this;
    }

    removeCostumer(costumer) {
        const { costumerFound, index } = this.findCostumer(costumer);
        
        const COSTUMER_NOT_FOUND = index == -1
        
        if (COSTUMER_NOT_FOUND) {
            console.log("Costumer not in the list");
            return
        }

        this._costumers.splice(index, 1);

        eventEmitter.remove(events.BREAD_BAKED, index);

        costumer.bakery = null;
    }

    findCostumer(costumer) {
        const result = {
            costumerFound: null,
            index: -1
        }

        this._costumers.forEach( (c,index) => {
            if(c == costumer) {
                result.costumerFound = c;
                result.index = index;
                return
            }
        })

        return result;
    }
}

module.exports = Bakery
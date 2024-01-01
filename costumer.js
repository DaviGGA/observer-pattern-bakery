class Costumer {
    _costumerName
    _maxPrice
    _moneyAmount
    _bakery

    constructor(costumerName,maxPrice, moneyAmount, bakery) {
        this._maxPrice = maxPrice
        this._moneyAmount = moneyAmount
        this._bakery = bakery
        this._costumerName = costumerName
    }

    set bakery(bakery) {
        this._bakery = bakery
    }

    buyBread() {
        if (this._bakery.breads <= 0) {
            console.log(`Not enough breads for ${this._costumerName}`);
            return
        }


        if (this._bakery.breadPrice > this._maxPrice) {
            console.log(`Bread too expensive! ${this._costumerName} isn't buying.`);
            return
        }

        if (this._moneyAmount >= this._bakery.breadPrice) {
            this._moneyAmount -= this._bakery.breadPrice
            console.log(`Costumer ${this._costumerName} bought a bread costing ${this._bakery.breadPrice}`)
            this._bakery._breads -= 1
        } else {
            console.log(`${this._costumerName} doesn't have enough money to buy a bread`)
        }
    }


}

module.exports = Costumer
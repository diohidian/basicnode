const Mamalia = require("../models/animal")

class MamaliaServices {
    constructor() {
        this.mamaliaModel = new Mamalia()
    }

    getSuara() {
        this.mamaliaModel.suaraAnimals()
    }

}

module.exports = MamaliaServices


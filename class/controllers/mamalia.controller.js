const MamaliaServices = require("../services/mamalia.services")

class MamaliaController {
    constructor() {
        this.mamaliaServices = new MamaliaServices()
    }

    getSuara() {
        this.mamaliaServices.getSuara()
    }

}

module.exports = MamaliaController
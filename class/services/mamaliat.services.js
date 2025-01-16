class MamaliaServices {
    constructor(mamaliaModel) {
        this.mamaliaModel = new Mamalia()
    }

    getSuara() {
        this.mamaliaModel.suaraAnimals()
    }

}
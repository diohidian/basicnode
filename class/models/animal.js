class Animal {
    constructor(name, type, habitat) {
        this.name = name;
        this.type = type;
        this.habitat = habitat;
    }

    suaraAnimals() {
          console.log("Roar");
          
    }
   
}

class Mamalia extends Animal {


}

module.exports = Mamalia


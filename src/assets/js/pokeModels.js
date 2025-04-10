export class Pokemon {

  constructor(number, name, type, types, image, abilities, heigth, weight) {
    this.number = number;
    this.name = name;
    this.type = type;
    this.types = types || [];
    this.image = image;
    this.abilities = [];
    this.height = heigth;
    this.weight = weight;
  }
}
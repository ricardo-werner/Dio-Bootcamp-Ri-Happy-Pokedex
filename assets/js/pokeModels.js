class Pokemon {
  number;
  name;
  type;
  types = [];
  image;

  constructor(number, name, type, types, image) {
    this.number = number;
    this.name = name;
    this.type = type;
    this.types = types;
    this.image = image;
  }
}
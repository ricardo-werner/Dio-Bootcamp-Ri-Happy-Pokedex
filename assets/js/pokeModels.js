class Pokemon {
  number;
  name;
  type;
  types = [];
  image;

    constructor(name, number, type, types, image) {
        this.name = name;
        this.number = number;
        this.type = type;
        this.types = types;
        this.image = image;
    }
}
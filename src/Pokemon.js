class Pokemon {
  constructor(data) {
    this.id = data.id;
    this.name = data.name;
    this.image = data.sprites.front_default;
    this.type1 = data.types[0].type.name;
    this.type2 = data.types[1] ? data.types[1].type.name : null
    
  }
}

export default Pokemon;
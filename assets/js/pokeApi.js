import { Pokemon } from "./pokeModels.js"

export const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
  //console.log("Dados recebidos do pokeDetail:", pokeDetail); // Log para depuração

  const pokemon = new Pokemon();

  // Número e nome do Pokémon
  pokemon.number = pokeDetail.id || 0;
  pokemon.name = pokeDetail.name || "Desconhecido";

  // Tipos
  const types = (pokeDetail.types || []).map(
    (typeSlot) => typeSlot.type?.name || "Desconhecido"
  );
  pokemon.types = types;
  pokemon.type = types[0] || "Desconhecido";

  // Imagem
  pokemon.image =
    pokeDetail.sprites?.other?.dream_world?.front_default ||
    pokeDetail.sprites?.front_default ||
    "default-image.png";

  // Altura e peso
  pokemon.height = (pokeDetail.height / 10).toFixed(1) || 0;
  pokemon.weight = (pokeDetail.weight / 10).toFixed(1) || 0;

  // Habilidades
  //console.log("Habilidades encontradas:", pokeDetail.abilities); // Verificar estrutura de abilities

  pokemon.abilities = (pokeDetail.abilities || []).map((abilitySlot) => {
    //console.log("Analisando abilitySlot:", abilitySlot); // Log para cada habilidade
    return abilitySlot?.ability?.name || "Habilidade desconhecida";
  });

  //console.log("Habilidades processadas:", pokemon.abilities); // Verificar habilidades finais

  return pokemon;
}




pokeApi.getPokemonDetail = (pokemon) => {
  return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)


    .catch((error) => console.error(error));
}
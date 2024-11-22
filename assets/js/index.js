import { pokeApi } from "./pokeApi.js"

const pokemonList = document.getElementById("pokemonList");
const nextButton = document.getElementById("nextButton");

const maxRecords = 164
const limit = 5;
let offset = 0;


function loadPokemonItens(offset, limit) {
  function convertPokemonToLi(pokemon) {
    return ` 
      <li class="pokemon ${pokemon.type}">
        <span class="number">#${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>

          <div class="detail">
            <ol class="types">
              ${pokemon.types
                .map((type) => `<li class="type ${type}">${type}</li>`)
                .join("")}
            </ol>

            <img
              src="${pokemon.image}"
              alt="${pokemon.name}">
          </div>                
      </li> 
    `;
}

  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    pokemonList.innerHTML += pokemons.map(convertPokemonToLi).join("");
  });
};

loadPokemonItens(offset, limit);

nextButton.addEventListener("click", () => {
  offset += limit;

  const qtdeRecordNextPage = offset + limit

  if (qtdeRecordNextPage >= maxRecords) {
    const newLimit = maxRecords - offset
    loadPokemonItens(offset, newLimit)

    nextButton.parentElement.removeChild(nextButton)
  }else {
    
  }
  loadPokemonItens(offset, limit);
});

import { pokeApi } from "./pokeApi.js";
import { showPokemonDetails } from "./modal.js";

const pokemonList = document.getElementById("pokemonList");
const nextButton = document.getElementById("nextButton");
const searchInput = document.querySelector(".search");

const maxRecords = 164;
const limit = 5;
let offset = 0;
let allLoadedPokemons = []; // Array para armazenar todos os Pokémon carregados

// Função para converter um Pokémon em HTML
function convertPokemonToLi(pokemon) {
  return ` 
    <li class="pokemon ${pokemon.type} data-number="${pokemon.number}">
      <span class="number">#${pokemon.number}</span>
      <span class="name">${pokemon.name}</span>

      <div class="detail">
        <ol class="types">
          ${pokemon.types
            .map((type) => `<li class="type ${type}">${type}</li>`)
            .join("")}
        </ol>
        <img src="${pokemon.image}" alt="${pokemon.name}">
      </div>                
    </li> 
  `;
}

// Função para renderizar a lista de Pokémon
function renderPokemonList(pokemons) {
  pokemonList.innerHTML = pokemons.map(convertPokemonToLi).join("");

  // Adiciona eventos de clique aos itens da lista
  const pokemonItems = pokemonList.querySelectorAll(".pokemon");
  pokemonItems.forEach((item) => {
    item.addEventListener("click", () => {
      const pokemonNumber = item.dataset.number; // Obtém o número do atributo data-number
      const pokemon = allLoadedPokemons.find(
        (p) => p.number.toString() === pokemonNumber // Encontra o Pokémon correspondente
      );
      if (pokemon) {
        showPokemonDetails(pokemon); // Exibe o modal com os detalhes do Pokémon
      }
    });
  });
}


// Função para carregar os Pokémon da API
function loadPokemonItens(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    allLoadedPokemons = [...allLoadedPokemons, ...pokemons]; // Adiciona os Pokémon carregados ao array global
    renderPokemonList(allLoadedPokemons); // Renderiza todos os Pokémon carregados
  });
}

// Função para filtrar a lista de Pokémon com base no texto digitado
function filterPokemonList() {
  const searchQuery = searchInput.value.trim().toLowerCase(); // Captura o texto digitado
  const filteredPokemons = allLoadedPokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery)
  );
  renderPokemonList(filteredPokemons); // Renderiza apenas os Pokémon filtrados

  // Limpa o campo de busca após a filtragem
  if (
    filteredPokemons.length === 1 &&
    filteredPokemons[0].name.toLowerCase() === searchQuery
  ) {
    searchInput.value = ""; // Limpa o campo apenas se o nome corresponder exatamente a um Pokémon
  }
}

// Evento de busca em tempo real
searchInput.addEventListener("input", filterPokemonList);

// Evento para carregar mais Pokémon ao clicar no botão "Próxima"
nextButton.addEventListener("click", () => {
  offset += limit;

  const qtdeRecordNextPage = offset + limit;

  if (qtdeRecordNextPage >= maxRecords) {
    const newLimit = maxRecords - offset;
    loadPokemonItens(offset, newLimit);

    // Remove o botão "Próxima" ao atingir o máximo
    nextButton.parentElement.removeChild(nextButton);
  } else {
    loadPokemonItens(offset, limit);
  }
});

// Carrega os primeiros Pokémon ao iniciar
loadPokemonItens(offset, limit);

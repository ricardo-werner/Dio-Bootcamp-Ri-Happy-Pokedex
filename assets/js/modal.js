// Seletores para o modal e seu conteúdo
const pokemonDetailModal = document.getElementById("pokemonDetailModal");
const pokemonDetail = document.getElementById("pokemonDetail");
const closeModal = document.getElementById("closeModal");

// Função para exibir detalhes do Pokémon no modal
export function showPokemonDetails(pokemon) {
  pokemonDetail.innerHTML = `
    <h2>#${pokemon.number} - ${pokemon.name}</h2>
    <img src="${pokemon.image}" alt="${pokemon.name}">
    <p>Tipos: ${pokemon.types.join(", ")}</p>
  `;
  pokemonDetailModal.classList.add("visible");
}

// Função para fechar o modal
export function closePokemonModal() {
  pokemonDetailModal.classList.remove("visible");
}

// Adiciona evento ao botão de fechar o modal
closeModal.addEventListener("click", closePokemonModal);

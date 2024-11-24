export function showPokemonDetails(pokemon) {
  const modal = document.getElementById("pokemonModal");
  const modalContent = modal.querySelector(".modal-content");

  // Gera o conteúdo do modal com as informações do Pokémon
  modalContent.innerHTML = `
    <button class="modal-close-button ${pokemon.type}" >Fechar</button>
    <h2>${pokemon.name}&nbsp;-&nbsp;${pokemon.number}</h2>
    <img src="${pokemon.image}" alt="${pokemon.name}">
    <h3>Tipo:</h3>
    <p>${pokemon.types.join('&nbsp;&nbsp;&nbsp;')}</p>
    <h3>Caracteríticas</h3>
    <p>Habilidades: ${pokemon.abilities.join('&nbsp;&&nbsp;')}</p>
    <p>Altura: ${pokemon.height}&nbsp;m</p>
    <p>Peso: ${pokemon.weight}&nbsp;kg</p>
  `;

  // Remove a classe que esconde o modal
  modal.classList.remove("hidden");

  // Adiciona evento ao botão de fechar
  const closeButton = modalContent.querySelector(".modal-close-button");
  closeButton.addEventListener("click", closePokemonModal);
}

export function closePokemonModal() {
  const modal = document.getElementById("pokemonModal");
  modal.classList.add("hidden"); // Esconde o modal
}

export function showPokemonDetails(pokemon) {
  const modal = document.getElementById("pokemonModal");
  const modalContent = modal.querySelector(".modal-content");

  // Gera o conteúdo do modal com as informações do Pokémon
  modalContent.innerHTML = `
    <button class="modal-close-button">Fechar</button>
    <h2>${pokemon.name}</h2>
    <img src="${pokemon.image}" alt="${pokemon.name}">
    <p>Tipo: ${pokemon.types.join(", ")}</p>
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

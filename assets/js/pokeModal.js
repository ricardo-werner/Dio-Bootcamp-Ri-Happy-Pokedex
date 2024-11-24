export function showPokemonDetails(pokemon) {
  const modal = document.getElementById("pokemonModal");
  const modalContent = modal.querySelector(".modal-content");

  // Gera o conteúdo do modal com as informações do Pokémon
  modalContent.innerHTML = `
<div class="poke-info ${pokemon.type}">
  <button class="modal-close-button ${pokemon.type}">Fechar</button>
  <h2>${pokemon.name}&nbsp;-&nbsp;${pokemon.number}</h2>
  <img src="${pokemon.image}" alt="${pokemon.name}" />
</div>

<div class="pokemon-info">
  <div>
    <h3>Tipo</h3>
    <ol class="poke-types">
      ${pokemon.types
        .map((type) => `<p class="type ${type}">${type}</p>`)
        .join("")}
    </ol>
  </div>

<div class="content-info">
    <h3>Caracterísiticas</h3>
  <!-- Peso -->
    <div class="info-item">
      <span class="label"><img src="./assets/icons/weight.svg" alt="Peso Icon">Peso:</span>
      <span class="value">&nbsp;&nbsp;${pokemon.weight}&nbsp;kg</span>
      
    </div>

  <!-- Altura -->
    <div class="info-item">
      <span class="label"><img src="./assets/icons/straighten.svg" alt="Altura Icon">Altura:</span>
      <span class="value">&nbsp;&nbsp;${pokemon.height}&nbsp;m</span>
    </div>

  <!-- Habilidades -->
    <div class="info-item-abilities">
      <span class="label">Habilidades:</span>
      <span class="value">&nbsp;${pokemon.abilities.join("&nbsp;&nbsp;")}</span>
    </div>
</div>
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

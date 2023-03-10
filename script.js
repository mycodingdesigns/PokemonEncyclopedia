// Pokemon Info and Stats (From IDs)
const pokeName = document.querySelector('[pokeName]');
const pokeImg = document.querySelector('[pokeImg]');
const pokeId = document.querySelector('[pokeId]');
const pokeTypes = document.querySelector('[pokeTypes]');
const pokeAbilities = document.querySelector('[pokeAbilities]');
const pokeHP = document.querySelector('[pokeHP]');
const pokeAttack = document.querySelector('[pokeAttack]');
const pokeDefense = document.querySelector('[pokeDefense]');
const pokeSpecialAttack = document.querySelector('[pokeSpecialAttack]');
const pokeSpecialDefense = document.querySelector('[pokeSpecialDefense]');
const pokeSpeed = document.querySelector('[pokeSpeed]');

// Searching Up A Pokemon
const search = event => {
  event.preventDefault();
  const {value} = event.target.pokemon;
  fetch(`https://pokeapi.co/api/v2/pokemon/${value.toLowerCase()}`)
  .then(data => data.json())
  .then(response => outPokemon(response))
  .catch(err => noPokemon())
}

// Search Results


// Color Coding the Pokemon


// Pulling Data From the API
const outPokemon = data => {
  console.log(data);
  const sprite = data.sprites.front_default;
  const {stats, types} = data;
  pokeName.textContent = data.name;
  pokeImg.setAttribute('src', sprite);
  pokeId.textContent = `ID Number: ${data.id}`;
  pokeTypes.textContent = `Types: ${data.types.map(type => type.type.name).join(", ")}`;
  pokeAbilities.textContent = `Abilities: ${data.abilities.map(ability => ability.ability.name).join(", ")}`;
  pokeHP.textContent = `Base HP: ${data.stats.find(stat => stat.stat.name === "hp").base_stat}`;
  pokeAttack.textContent = `Attack: ${data.stats.find(stat => stat.stat.name === "attack").base_stat}`;
  pokeSpecialAttack.textContent = `Special Attack: ${data.stats.find(stat => stat.stat.name === "special-attack").base_stat}`;
  pokeSpecialDefense.textContent = `Special Defense: ${data.stats.find(stat => stat.stat.name === "special-defense").base_stat}`;
  pokeSpeed.textContent = `Speed: ${data.stats.find(stat => stat.stat.name === "speed").base_stat}`;
}
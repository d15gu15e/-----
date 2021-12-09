const apiURL = "https://pokeapi.co/api/v2/pokemon/ditto";

const getPokemon = async () => {
  const response = await fetch(apiURL);
  const data = await response.json();

  return data;
};

const pokemon = getPokemon()
  .then((data) => data)
  .catch((err) => console.warn(`API Call Rejected: ${err.message}!`));

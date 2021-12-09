"use strict";
const apiURL = "https://pokeapi.co/api/v2/pokemon/ditto";
const getPokemon = async () => {
    const response = await fetch(apiURL, { method: "GET" });
    if (!response.ok)
        throw new Error("Cannot fetch data");
    const data = await response.json();
    console.log(data);
    return data;
};
console.log(getPokemon());

export const addLeadingZeros = (num: number, totalLength: number) => {
    return String(num).padStart(totalLength, "0");
};

export const renderPokemonImage = (id: number) => {
    const index = addLeadingZeros(id, 3);
    const url = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${index}.png`;

    return url;
};

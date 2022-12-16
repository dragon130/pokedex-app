"use-client";
import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

import { usePokemon } from "../../hooks/usePokemon";
import EvolutionBox from "./EvolutionBox";
import { PokemonEvoChain } from "../../helpers/interface";

const Evolution = ({ url }: { url: string }) => {
    const [evolution, setEvolution] = useState<PokemonEvoChain>(
        {} as PokemonEvoChain
    );
    const { fetchPokemonByUrl } = usePokemon();

    const handleFetchEvolution = async (url: string) => {
        const evoChain = (await fetchPokemonByUrl(url)) || {};
        const { chain } = evoChain;
        console.log("chain >", chain);
        setEvolution(chain);
    };

    useEffect(() => {
        handleFetchEvolution(url);
    }, [url]);

    return (
        <Box display="flex">
            {evolution?.evolves_to?.length && (
                <>
                    {evolution?.evolves_to.map((evo) => {
                        const splitUrl = evo.species.url.split("/");
                        const pokemonId = splitUrl[splitUrl.length - 2];
                        return (
                            <EvolutionBox
                                key={pokemonId}
                                name={evo.species.name}
                                id={pokemonId}
                            />
                        );
                    })}
                </>
            )}
        </Box>
    );
};

export default Evolution;

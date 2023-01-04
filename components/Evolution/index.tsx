"use-client";
import React, { useState, useEffect } from "react";
import { Box, Text } from "@chakra-ui/react";

import { usePokemon } from "../../hooks/usePokemon";
import EvolutionChain from "./EvolutionChain";
import { PokemonEvoChain } from "../../helpers/interface";

const Evolution = ({ url }: { url: string }) => {
    const [evolution, setEvolution] = useState<PokemonEvoChain>(
        {} as PokemonEvoChain
    );
    const { fetchPokemonEvolution, loading } = usePokemon();
    const handleFetchEvolution = async (url: string) => {
        const evoChain = (await fetchPokemonEvolution(url)) || {};

        const { chain } = evoChain;

        setEvolution(chain);
    };

    useEffect(() => {
        if (url) {
            handleFetchEvolution(url);
        }
    }, [url]);

    if (loading) {
        return null;
    }

    return (
        <Box display="flex" marginTop={10}>
            <EvolutionChain evolution={evolution} />
        </Box>
    );
};

export default Evolution;

"use client";
import { useState, useEffect } from "react";
import { Container, Collapse } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

import { usePokemon } from "../../hooks/usePokemon";

import Pokemon from "../../components/Pokemon";
import { PokemonInterface } from "../../helpers/interface";

const PokemonPage = () => {
    const { fetchPokemonByName, fetchPokemonSpecies, loading, error } =
        usePokemon();
    const router = useRouter();
    const name: string = router?.query?.name;

    const [pokemon, setPokemon] = useState<PokemonInterface | null>(null);
    const [species, setSpecies] = useState();

    const handleFetchPokemon = async (name: string) => {
        const res = await fetchPokemonByName(name);
        if (res) {
            const { species } = res;
            const pokemonSpeciesResult = await fetchPokemonSpecies(species.url);
            setSpecies(pokemonSpeciesResult);
        }
        setPokemon(res);
    };

    useEffect(() => {
        if (name) {
            handleFetchPokemon(name);
        }
    }, [name]);

    return (
        <Container>
            <Collapse in={!loading} animateOpacity>
                <Pokemon pokemon={pokemon!} species={species!} />
            </Collapse>
        </Container>
    );
};

export default PokemonPage;

"use-client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
    Grid,
    GridItem,
    Box,
    SkeletonCircle,
    SkeletonText,
    Text,
    ScaleFade,
} from "@chakra-ui/react";
import Image from "next/image";

import { renderPokemonImage, addLeadingZeros } from "../helpers/utility";
import { typeColors } from "../helpers/constants";
import { PokemonInterface } from "../helpers/interface";
import { usePokemon } from "../hooks/usePokemon";

const Pokemon = ({ name, url }: { name: string; url: string }) => {
    const { fetchPokemonByUrl, loading, error } = usePokemon();
    const router = useRouter();

    const [pokemon, setPokemon] = useState<PokemonInterface | null>(null);

    const handleFetchPokemon = async (url: string) => {
        const res = await fetchPokemonByUrl(url);
        setPokemon(res);
    };

    useEffect(() => {
        handleFetchPokemon(url);
    }, [url]);

    const handleClickPokemon = (event: React.MouseEvent, name: string) => {
        router.push(`/pokemon/${name}`);
        return;
    };

    const pokemonTypeColor =
        typeColors[pokemon?.types?.[0].type?.name! as keyof typeof typeColors];

    return (
        <GridItem
            justifyContent="center"
            textAlign="center"
            border={`2px solid ${pokemonTypeColor}`}
            borderRadius={8}
            cursor="pointer"
            onClick={(e) => handleClickPokemon(e, pokemon?.name!)}
        >
            {!loading && (
                <ScaleFade initialScale={0.9} in={!loading}>
                    <Box p={2}>
                        <Text
                            fontSize={18}
                            textTransform="capitalize"
                            color={pokemonTypeColor}
                            textAlign="right"
                        >
                            {`#${addLeadingZeros(pokemon?.id!, 3)}`}
                        </Text>
                    </Box>

                    <Image
                        src={renderPokemonImage(pokemon?.id!) || ""}
                        alt="Pokemon"
                        width={200}
                        height={200}
                        style={{ margin: "0 auto" }}
                    />

                    <Box
                        px={8}
                        py={4}
                        bg={pokemonTypeColor}
                        borderBottomEndRadius={4}
                    >
                        <Text
                            fontSize={18}
                            textTransform="capitalize"
                            color="#fff"
                        >
                            {name}
                        </Text>
                    </Box>
                </ScaleFade>
            )}

            {loading && (
                <Grid justifyContent="center">
                    <SkeletonCircle size="200" />
                    <SkeletonText mt="4" noOfLines={1} />
                </Grid>
            )}
        </GridItem>
    );
};

export default Pokemon;

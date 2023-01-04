import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";

import { renderPokemonImage } from "../../helpers/utility";
import { PokemonEvolve, PokemonEvoChain } from "../../helpers/interface";

const EvolutionBox = ({
    evolution,
}: {
    evolution: PokemonEvoChain | PokemonEvolve;
}) => {
    const { species, evolves_to } = evolution;
    const splitUrl = species?.url?.split("/") || "";
    const pokemonId = splitUrl[splitUrl.length - 2];

    return (
        <Box>
            <Box>
                <Image
                    src={renderPokemonImage(pokemonId)}
                    alt="pokemon image"
                    width={120}
                    height={120}
                />
            </Box>

            <Box>
                <Text textTransform="capitalize" textAlign="center">
                    {species?.name}
                </Text>
            </Box>
        </Box>
    );
};

export default EvolutionBox;

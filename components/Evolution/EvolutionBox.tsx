import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import { renderPokemonImage } from "../../helpers/utility";

const EvolutionBox = ({ name, id }: { name: string; id: string }) => {
    return (
        <Box>
            <Box>
                <Image
                    src={renderPokemonImage(id)}
                    alt="pokemon image"
                    width={150}
                    height={150}
                />
            </Box>

            <Box>
                <Text>{name}</Text>
            </Box>
        </Box>
    );
};

export default EvolutionBox;

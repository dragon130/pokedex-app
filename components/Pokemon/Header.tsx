import { Box, Text } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";

import { addLeadingZeros } from "../../helpers/utility";
import { PokemonInterface } from "../../helpers/interface";

const PokemonHeader = ({ pokemon }: { pokemon: PokemonInterface }) => {
    const router = useRouter();

    const handleBackButton = () => {
        router.back();
    };

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            px="24px"
            pt="24px"
            alignItems="center"
            zIndex={2}
            position="relative"
            mb={270}
        >
            <Box display="flex" alignItems="center">
                <ArrowBackIcon
                    fontSize={30}
                    color="#fff"
                    marginRight="16px"
                    onClick={handleBackButton}
                    cursor="pointer"
                />
                <Text
                    as="b"
                    color="#fff"
                    fontSize={24}
                    textTransform="capitalize"
                >
                    {pokemon?.name}
                </Text>
            </Box>

            <Box justifyContent="end">
                <Text as="b" color="#fff" fontSize={12}>
                    {`#${addLeadingZeros(pokemon?.id!, 3)}`}
                </Text>
            </Box>
        </Box>
    );
};

export default PokemonHeader;

import { Box, Icon } from "@chakra-ui/react";
import EvolutionBox from "./EvolutionBox";
import Image from "next/image";
import { ArrowForwardIcon } from "@chakra-ui/icons";

import { PokemonEvoChain } from "../../helpers/interface";

const Evolution = ({ evolution }: { evolution: PokemonEvoChain }) => {
    if (evolution?.evolves_to?.length) {
        return (
            <Box display="flex" alignItems="center">
                <EvolutionBox evolution={evolution} />
                <Icon as={ArrowForwardIcon} fontSize={50} />
                {evolution.evolves_to.map((x) => {
                    if (x.evolves_to.length) {
                        return (
                            <>
                                <EvolutionBox
                                    key={x.species.url}
                                    evolution={x}
                                />
                                <Icon as={ArrowForwardIcon} fontSize={50} />
                                <EvolutionBox
                                    key={x.species.url}
                                    evolution={x.evolves_to[0]}
                                />
                            </>
                        );
                    }
                    return <EvolutionBox key={x.species.url} evolution={x} />;
                })}
            </Box>
        );
    }

    return (
        <Box display="flex">
            <EvolutionBox evolution={evolution} />
        </Box>
    );
};

export default Evolution;

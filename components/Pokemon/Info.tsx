import { Box, Text } from "@chakra-ui/react";
import { PokemonInterface } from "../../helpers/interface";

const pokemonInfo = ["weight", "height", "moves"];

const PokemonInfo = ({ pokemon }: { pokemon: PokemonInterface }) => {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="self-end"
            my="16px"
        >
            {pokemon && (
                <>
                    {pokemonInfo.map((info, idx) => {
                        const renderInfo = () => {
                            if (info === "moves") {
                                if (pokemon[info].length) {
                                    const selectedMoves = pokemon[info].slice(
                                        0,
                                        2
                                    );
                                    return (
                                        <>
                                            {selectedMoves.map((move) => {
                                                return (
                                                    <Text
                                                        key={move.move.name}
                                                        color="#212121"
                                                        fontSize={14}
                                                        textTransform="capitalize"
                                                    >
                                                        {move.move.name}
                                                    </Text>
                                                );
                                            })}
                                        </>
                                    );
                                }
                            }

                            return (
                                <Text color="#212121" fontSize={18}>
                                    {`${pokemon[info as keyof typeof pokemon]}${
                                        info === "weight"
                                            ? "kg"
                                            : info === "height"
                                            ? "m"
                                            : null
                                    }`}
                                </Text>
                            );
                        };

                        return (
                            <Box
                                key={info}
                                textAlign="center"
                                flexBasis="33%"
                                borderRight={
                                    idx !== 2 ? "1px solid #E0E0E0" : "none"
                                }
                            >
                                <Box>{renderInfo()}</Box>
                                <Box>
                                    <Text
                                        fontSize={12}
                                        color="#666666"
                                        textTransform="capitalize"
                                    >
                                        {info}
                                    </Text>
                                </Box>
                            </Box>
                        );
                    })}
                </>
            )}
        </Box>
    );
};

export default PokemonInfo;

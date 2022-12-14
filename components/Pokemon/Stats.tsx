import { Box, Progress, Text } from "@chakra-ui/react";
import { PokemonInterface } from "../../helpers/interface";

const statLabels = ["HP", "ATK", "DEF", "SATK", "SDEF", "SPD"];

const PokemonStats = ({
    pokemon,
    color,
}: {
    pokemon: PokemonInterface;
    color: string;
}) => {
    return (
        <Box display="flex" gap={3}>
            <Box display="flex" flexDirection="column">
                {statLabels.map((label) => {
                    return (
                        <Text key={label} as="b" fontSize={16} color={color}>
                            {label}
                        </Text>
                    );
                })}
            </Box>
            <Box width="2px" background="#E0E0E0" />
            <Box flexGrow={1}>
                {pokemon?.stats?.length && (
                    <>
                        {pokemon.stats.map((x, idx) => {
                            return (
                                <Box
                                    key={idx}
                                    display="flex"
                                    alignItems="center"
                                >
                                    <Text marginRight="8px">{x.base_stat}</Text>
                                    <Progress
                                        width="100%"
                                        value={x.base_stat}
                                        color="#000"
                                        background={`${color}80 `}
                                        borderRadius="50px"
                                        height="4px"
                                        sx={{
                                            div: {
                                                background: color,
                                            },
                                        }}
                                    />
                                </Box>
                            );
                        })}
                    </>
                )}
            </Box>
        </Box>
    );
};

export default PokemonStats;

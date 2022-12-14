import {
    Box,
    Text,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
} from "@chakra-ui/react";
import Image from "next/image";

import { renderPokemonImage } from "../../helpers/utility";
import { typeColors } from "../../helpers/constants";
import {
    PokemonInterface,
    PokemonSpecies,
    TextEntries,
} from "../../helpers/interface";

import PokeballLogo from "../../assets/images/pokeball.png";

import PokemonHeader from "./Header";
import PokemonInfo from "./Info";
import PokemonStats from "./Stats";
import PokemonEvolution from "../Evolution";

const initialTabs = ["About", "Evolution"];

const Pokemon = ({
    pokemon,
    species,
}: {
    pokemon: PokemonInterface;
    species: PokemonSpecies;
}) => {
    const pokemonTypeColor =
        typeColors[pokemon?.types?.[0].type?.name! as keyof typeof typeColors];

    const renderDescription = (value: TextEntries[]) => {
        const foundDescription = value.find(
            (x) =>
                x?.language?.name === "en" && x?.version?.name === "leafgreen"
        );
        const description = foundDescription?.flavor_text || "";
        let str = description;
        str = str.replace(/\\/g, "");
        return str;
    };

    return (
        <Box
            background={pokemonTypeColor}
            borderRadius="12px"
            p="4px"
            position="relative"
        >
            <Box position="absolute" top="-20px" right="-120px" opacity={0.1}>
                <Image
                    src={PokeballLogo}
                    alt="Pokemon"
                    width={600}
                    height={600}
                />
            </Box>

            <PokemonHeader pokemon={pokemon} />

            <Box
                background="#fff"
                borderRadius="8px"
                pt="80px"
                pb="44px"
                px="20px"
                position="relative"
            >
                <Box
                    zIndex={2}
                    position="absolute"
                    top="-230px"
                    left="0"
                    right="0"
                    margin="0 auto"
                >
                    <Image
                        src={renderPokemonImage(pokemon?.id!) || ""}
                        alt="Pokemon"
                        width={300}
                        height={300}
                        style={{ margin: "0 auto" }}
                    />
                </Box>

                <Box display="flex" justifyContent="center" gap={4}>
                    {pokemon?.types?.map((x) => {
                        return (
                            <Box
                                key={x.type.name}
                                background={
                                    typeColors[
                                        x.type.name! as keyof typeof typeColors
                                    ]
                                }
                                borderRadius="18px"
                                px="8px"
                                py="2px"
                            >
                                <Text
                                    as="b"
                                    fontSize={14}
                                    color="#fff"
                                    textTransform="capitalize"
                                    letterSpacing={1}
                                >
                                    {x.type.name}
                                </Text>
                            </Box>
                        );
                    })}
                </Box>

                <Tabs
                    mt="16px"
                    borderColor={`${pokemonTypeColor}80`}
                    sx={{
                        "button[aria-selected=true]": {
                            borderColor: pokemonTypeColor,
                        },
                    }}
                >
                    <TabList justifyContent="center">
                        {initialTabs.map((tab) => {
                            return (
                                <Tab key={tab}>
                                    <Text
                                        as="b"
                                        fontSize={20}
                                        color={pokemonTypeColor}
                                        textTransform="capitalize"
                                    >
                                        {tab}
                                    </Text>
                                </Tab>
                            );
                        })}
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <PokemonInfo pokemon={pokemon} />
                            <Box>
                                {species?.flavor_text_entries?.[0]
                                    .flavor_text && (
                                    <Text fontWeight={400} color="#212121">
                                        {renderDescription(
                                            species?.flavor_text_entries
                                        )}
                                    </Text>
                                )}
                            </Box>
                            <Box
                                display="flex"
                                justifyContent="center"
                                mt="16px"
                            >
                                <Text
                                    as="b"
                                    fontSize={25}
                                    color={pokemonTypeColor}
                                    textTransform="capitalize"
                                >
                                    Base Stats
                                </Text>
                            </Box>
                            <PokemonStats
                                pokemon={pokemon}
                                color={pokemonTypeColor}
                            />
                        </TabPanel>
                        <TabPanel>
                            <PokemonEvolution
                                url={species?.evolution_chain?.url}
                            />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    );
};

export default Pokemon;

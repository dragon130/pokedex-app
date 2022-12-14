import axios from "axios";

import { Grid, Box } from "@chakra-ui/react";

import Header from "../components/Header";
import PokemonItem from "../components/PokemonItem";

interface Pokemons {
    name: string;
    url: string;
}

type HomeProps = {
    pokemons: Pokemons[];
};

const Home = ({ pokemons }: HomeProps) => {
    return (
        <Box px={10} py={4}>
            <Grid templateColumns="repeat(4, 1fr)" gap={4} py={8}>
                {pokemons.map((pokemon: { name: string; url: string }) => {
                    return (
                        <PokemonItem
                            key={pokemon.name}
                            name={pokemon.name}
                            url={pokemon.url}
                        />
                    );
                })}
            </Grid>
        </Box>
    );
};

export const getServerSideProps = async () => {
    const res = await axios({
        method: "get",
        url: `https://pokeapi.co/api/v2/pokemon?limit=151`,
    });

    const pokemons = res.data.results;

    return { props: { pokemons } };
};

export default Home;

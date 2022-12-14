import { useState, useEffect } from "react";
import { usePokemon } from "../../hooks/usePokemon";
import { PokemonEvoChain } from "../../helpers/interface";

const Evolution = ({ url }: { url: string }) => {
    const [evolution, setEvolution] = useState({} as PokemonEvoChain);
    const { fetchPokemonByUrl } = usePokemon();

    const handleFetchEvolution = async (url: string) => {
        const evoChain = await fetchPokemonByUrl(url);
        const { chain } = evoChain;
        console.log("chain >", chain);
        setEvolution(chain);
    };

    useEffect(() => {
        handleFetchEvolution(url);
    }, [url]);

    return <div>test</div>;
};

export default Evolution;

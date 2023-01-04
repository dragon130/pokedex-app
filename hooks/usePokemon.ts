import { useState } from "react";
import axios from "axios";

export const usePokemon = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>({});

    const fetchPokemonByUrl = async (url: string) => {
        setLoading(true);
        try {
            const res = await axios({
                method: "get",
                url,
            });

            setLoading(false);

            return res.data;
        } catch (err: any) {
            setError(err);
            setLoading(false);
        }
    };

    const fetchPokemonByName = async (name: string) => {
        setLoading(true);
        try {
            const res = await axios({
                method: "get",
                url: `https://pokeapi.co/api/v2/pokemon/${name}/`,
            });

            setLoading(false);

            return res.data;
        } catch (err: any) {
            setError(err);
            setLoading(false);
        }
    };

    const fetchPokemonSpecies = async (url: string) => {
        setLoading(true);
        try {
            const res = await axios({
                method: "get",
                url,
            });

            setLoading(false);

            return res.data;
        } catch (err: any) {
            setError(err);
            setLoading(false);
        }
    };

    const fetchPokemonEvolution = async (url: string) => {
        setLoading(true);
        try {
            const res = await axios({
                method: "get",
                url,
            });

            setLoading(false);

            return res.data;
        } catch (err: any) {
            setError(err);
            setLoading(false);
        }
    };

    return {
        fetchPokemonByUrl,
        fetchPokemonByName,
        fetchPokemonSpecies,
        fetchPokemonEvolution,
        loading,
        error,
    } as const;
};

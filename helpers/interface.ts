interface Types {
    slot: number;
    type: {
        name: string;
    };
}

interface Stats {
    base_stat: number;
    effort: number;
    stat: {
        name: string;
    };
}

export interface PokemonInterface {
    id: number;
    name: string;
    height: number;
    weight: number;
    moves: string[];
    types: Types[];
    stats: Stats[];
}

export interface TextEntries {
    flavor_text: string;
    language: {
        name: string;
        url: string;
    };
    version: {
        name: string;
        url: string;
    };
}

export interface PokemonSpecies {
    id: number;
    flavor_text_entries: TextEntries[];
    evolution_chain: {
        url: string;
    };
}

interface PokemonEvolve {
    evolves_to: PokemonEvolve[];
    isBaby: boolean;
    species: {
        name: string;
        url: string;
    };
}

export interface PokemonEvoChain {
    species: {
        name: string;
        url: string;
    };
    evolves_to: PokemonEvolve[];
}

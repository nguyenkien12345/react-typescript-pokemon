import { Pokemon } from "./Pokemon";

export interface PokemonDetail extends Pokemon {
    abilities?: {
        ability: string;
        name: string;
    }[];
}

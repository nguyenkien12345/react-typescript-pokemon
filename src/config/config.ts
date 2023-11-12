export const URL_LIST: string = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=10";
export const URL_DETAIL = (name: string) => {
    return `https://pokeapi.co/api/v2/pokemon/${name}`;
}

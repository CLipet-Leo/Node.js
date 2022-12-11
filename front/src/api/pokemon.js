export const getAll = async () => {
    const response = await fetch(
        'http://localhost:4444/Pokemon/list', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
    const pokemons = await response.json()
    return pokemons
}

export const addToPokedex = async () => {
    const response = await fetch(
        'http://localhost:4444/Pokedex/insert', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
    const pokedex = await response.json()
    return pokedex
}

export const getPokedex = async () => {
    const response = await fetch(
        'http://localhost:4444/Pokedex/list', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
    )
    const pokedex = await response.json()
    return pokedex
}
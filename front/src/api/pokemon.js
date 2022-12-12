export const getAll = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/list', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemon)
    }
    )
    const pokemons = await response.json()
    return pokemons
}

export const addToPokedex = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/pokedex/insert', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemon)
    }
    )
    const pokedex = await response.json()
    return pokedex
}

export const getPokedex = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/pokedex/list', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemon)
    }
    )
    const pokedex = await response.json()
    return pokedex
}

export const delPokedex = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/pokedex/delete', {
        method: 'DEL',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemon)
    }
    )
    const pokedex = await response.json()
    return pokedex
}
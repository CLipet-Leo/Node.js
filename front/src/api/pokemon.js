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

export const addToPokemon = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/insert', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(pokemon)
    }
    )
    const pokemons = await response.json()
    return pokemons
}

export const updatePokemon = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/update', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(pokemon)
    }
    )
    const pokemons = await response.json()
    return pokemons
}

export const updateImage = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/imgupdate', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(pokemon)
    }
    )
    const pokemons = await response.json()
    return pokemons
}

export const delPokemon = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/pokemon/delete', {
        method: 'DELETE',
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

export const delPokedex = async (pokemon) => {
    const response = await fetch(
        'http://localhost:4444/pokedex/delete', {
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
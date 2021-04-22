import React, { useState, useContext, createContext } from 'react'
import pokemonInfo from '../assets/pokemonInfo.json'
import pokemonCart from '../assets/pokemonCart.json'

const PokemonContext = createContext()

const PokemonConsumer = () => useContext(PokemonContext)

function PokemonContextProvider({ children }) {

    const [ allPokemons, setAllPokemons ] = useState( pokemonInfo )
    const [ allCartItems, setallCartItems ] = useState( pokemonCart )

    const value = { 
        allPokemons, setAllPokemons,
        allCartItems, setallCartItems
    }
    
    return (
        <PokemonContext.Provider value={ value }>
            { children }
        </PokemonContext.Provider>
    )
}

export { PokemonConsumer, PokemonContextProvider }
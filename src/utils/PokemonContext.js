import React, { useState, useContext, createContext } from 'react'
import pokemonInfo from '../assets/pokemonInfo.json'

const PokemonContext = createContext()

const PokemonConsumer = () => useContext(PokemonContext)

function PokemonContextProvider({ children }) {

    const [ allPokemons, setAllPokemons ] = useState( pokemonInfo )
    
    return (
        <PokemonContext.Provider value={{allPokemons, setAllPokemons }}>
            {children}
        </PokemonContext.Provider>
    )
}

export { PokemonConsumer, PokemonContextProvider }
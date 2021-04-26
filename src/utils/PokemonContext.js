import React, { useState, useContext, createContext } from 'react'
import pokemonInfo from '../assets/pokemonInfo.json'
import pokemonCart from '../assets/pokemonCart.json'

const PokemonContext = createContext()

const PokemonConsumer = () => useContext(PokemonContext)

function PokemonContextProvider({ children }) {

    const [ allPokemons, setAllPokemons ] = useState( pokemonInfo )
    const [ allCartItems, setAllCartItems ] = useState( pokemonCart )

    const removeItemFromCart = (e) => {
        let newCart = [...allCartItems]
        delete newCart[e.target.dataset.id]
        newCart = newCart.filter(Boolean)
        setAllCartItems( newCart )
    }

    const updateItemFromCart = (e,action) => {
        let newCart = [...allCartItems]
        let item = newCart[e.target.dataset.id]
        // console.log(item)
        if (action === 'input') item.quantity = +e.target.value
        if (action === 'decrement' && item.quantity > 1) item.quantity = item.quantity - 1
        if (action === 'increment' && item.quantity < 10) item.quantity = item.quantity + 1
        // console.log(item)
        setAllCartItems( newCart )
    }

    //ToggleFavorite Feature
    const toggleFavorite = id => {
        // console.log(id)
        const updatedFavorites = allPokemons.map( pokemon => {
            if(pokemon.id === id) {
                return {
                    ...pokemon,
                    isFavorite: !pokemon.isFavorite
                }
            }
            return pokemon
        })
        setAllPokemons(updatedFavorites)
    }
    // console.log(allPokemons)

    const value = { 
        allPokemons, setAllPokemons,
        allCartItems, setAllCartItems, 
        removeItemFromCart, updateItemFromCart,
        toggleFavorite
    }
    
    return (
        <PokemonContext.Provider value={ value }>
            { children }
        </PokemonContext.Provider>
    )
}

export { PokemonConsumer, PokemonContextProvider }
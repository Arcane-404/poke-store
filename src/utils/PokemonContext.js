import React, { useState, useEffect, useCallback, useContext, createContext } from 'react'
import pokemonInfo from '../assets/pokemonInfo.json'
import pokemonCart from '../assets/pokemonCart.json'

const PokemonContext = createContext()

const PokemonConsumer = () => useContext(PokemonContext)

function PokemonContextProvider({ children }) {

    const [ allPokemons, setAllPokemons ] = useState( pokemonInfo )
    const [ allCartItems, setAllCartItems ] = useState( pokemonCart )
    const [ totalCost, setTotalCost ] = useState(0)

    const removeItem = (e) => {
        let newCart = [...allCartItems]
        let id = e.target.closest('button').dataset.id
        delete newCart[id]
        newCart = newCart.filter(Boolean)
        setAllCartItems( newCart )
    }

    const decrementItem = (e) => {
        let newCart = [...allCartItems]
        let id = e.target.closest('button').dataset.id
        let item = newCart[id]
        if (item.quantity > 1) item.quantity = item.quantity - 1
        setAllCartItems( newCart )
    }
    
    const incrementItem = (e) => {
        let newCart = [...allCartItems]
        let id = e.target.closest('button').dataset.id
        let item = newCart[id]
        if (item.quantity < 10) item.quantity = item.quantity + 1
        setAllCartItems( newCart )
    }
    
    const updateItemValue = (e) => {
        let newCart = [...allCartItems]
        let id = e.target.dataset.id
        let item = newCart[id]
        const value = +e.target.value
        if (value >= 1 && value <= 10) item.quantity = value
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

    const getTotalCost = useCallback(() => {
        const totalPrice = allCartItems.reduce((total, curr) => {
            const { quantity, price } = curr
            total += quantity * price
            return total
        }, 0)
        // console.log(totalPrice)
        setTotalCost( totalPrice )
    }, [ allCartItems ])

    useEffect(() => {
        getTotalCost()
    }, [ getTotalCost ])

    const value = { 
        allPokemons, setAllPokemons,
        allCartItems, setAllCartItems, 
        totalCost, removeItem, 
        decrementItem, incrementItem, 
        updateItemValue, toggleFavorite
    }
    
    return (
        <PokemonContext.Provider value={ value }>
            { children }
        </PokemonContext.Provider>
    )
}

export { PokemonConsumer, PokemonContextProvider, PokemonContext }
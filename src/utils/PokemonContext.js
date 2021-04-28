import React, { useState, useEffect, useCallback, useContext, createContext } from 'react'
import pokemonInfo from '../data/pokemonInfo.json'
import pokemonCart from '../data/pokemonCart.json'
import { getID } from './tools.js'

const PokemonContext = createContext()

const PokemonConsumer = () => useContext(PokemonContext)

function PokemonContextProvider({ children }) {

    const [ allPokemons, setAllPokemons ] = useState( pokemonInfo )
    const [ allCartItems, setAllCartItems ] = useState( null )
    const [ totalCost, setTotalCost ] = useState(0)
    const [ allFavorites, setAllFavorites ] = useState([])

    const removeItem = (e) => {
        let newCart = [...allCartItems]
        delete newCart[getID(e)]
        newCart = newCart.filter(Boolean)
        setAllCartItems( newCart )
    }

    const decrementItem = (e) => {
        let newCart = [...allCartItems]
        let item = newCart[getID(e)]
        if (item.quantity > 1) item.quantity = item.quantity - 1
        setAllCartItems( newCart )
    }
    
    const incrementItem = (e) => {
        let newCart = [...allCartItems]
        let item = newCart[getID(e)]
        if (item.quantity < 10) item.quantity = item.quantity + 1
        setAllCartItems( newCart )
    }

    //ToggleFavorite Feature
    const toggleFavorite = (id, pokemon) => {
        // console.log(id)
        // console.log(pokemon)
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
        setAllFavorites(prevFavorites => [...prevFavorites, pokemon])
    }
    // console.log(allFavorites)

    const addToCart = (pokeToCart) => {
        setAllCartItems(prevItems => [...prevItems, pokeToCart])
    }
    // console.log(allCartItems)

    const getTotalCost = useCallback(() => {
        const totalPrice = allCartItems && allCartItems.reduce((total, curr) => {
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

    useEffect(() => {
    //     setAllPokemons( pokemonInfo )
        setAllCartItems( pokemonCart )
    }, [ ])

    const value = { 
        allPokemons, setAllPokemons,
        allCartItems, setAllCartItems, 
        totalCost, removeItem, 
        decrementItem, incrementItem, 
        toggleFavorite, addToCart, 
        allFavorites, setAllFavorites
    }
    
    return (
        <PokemonContext.Provider value={ value }>
            { children }
        </PokemonContext.Provider>
    )
}

export { PokemonConsumer, PokemonContextProvider, PokemonContext }
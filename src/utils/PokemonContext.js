import React, { useState, useEffect, useCallback, useContext, createContext } from 'react'
import pokemonInfo from '../json/pokemonInfo'
// import pokemonCart from '../json/pokemonCart'

const PokemonContext = createContext()

const PokemonConsumer = () => useContext(PokemonContext)

function PokemonContextProvider({ children }) {

    const [ allPokemons, setAllPokemons ] = useState( pokemonInfo )
    const [ allCartItems, setAllCartItems ] = useState([])
    const [ allFavorites, setAllFavorites ] = useState([])
    const [ totalCost, setTotalCost ] = useState(0)

    const resetCart = () => {
        setAllCartItems([])
    }
    
    const removeItem = (id) => {
        let newCart = [...allCartItems]
        delete newCart[id]
        newCart = newCart.filter(Boolean)
        setAllCartItems( newCart )
    }

    const decrementItem = (id) => {
        let newCart = [...allCartItems]
        let item = newCart[id]
        if (item.quantity > 1) item.quantity = item.quantity - 1
        setAllCartItems( newCart )
    }
    
    const incrementItem = (id) => {
        let newCart = [...allCartItems]
        let item = newCart[id]
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
        // setAllFavorites(prevFavorites => [...prevFavorites, pokemon])
    }
    // console.log(allFavorites)

    // add & check to cart
    const addToCart = (pokeToCart) => {
        const isAlreadyInCart = allCartItems.find(item => item.pokemon === pokeToCart.pokemon)
        if (!isAlreadyInCart) {
            const addPkmnToCart = { ...pokeToCart, quantity: 1 }
            setAllCartItems(prevItems => [...prevItems, addPkmnToCart])
        }
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

    // useEffect(() => {
    //     setAllPokemons( pokemonInfo )
        // setAllCartItems( pokemonCart )
    // }, [ ])

    const value = { 
        allPokemons, setAllPokemons,
        allCartItems, setAllCartItems, 
        totalCost, resetCart,
        removeItem, decrementItem, 
        incrementItem, toggleFavorite, 
        addToCart, allFavorites, 
        setAllFavorites
    }
    
    return (
        <PokemonContext.Provider value={ value }>
            { children }
        </PokemonContext.Provider>
    )
}

export { PokemonConsumer, PokemonContextProvider, PokemonContext }
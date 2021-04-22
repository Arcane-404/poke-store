import React from 'react'
import HeaderContainer from '../containers/HeaderContainer.jsx'
import {PokemonConsumer} from '../utils/PokemonContext'


const Home = () => {
    const {allPokemons} = PokemonConsumer()
    console.log(allPokemons)
    
    return (
        <>
            <HeaderContainer/>
            <h1>Home Page</h1>
        </>
    )
}

export default Home
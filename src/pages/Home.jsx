import React from 'react'
import HeaderContainer from '../containers/HeaderContainer.jsx'
import {PokemonConsumer} from '../utils/PokemonContext'
import HeroContainer from '../containers/HeroContainer'


const Home = () => {
    const {allPokemons} = PokemonConsumer()
    
    return (
        <>
            <HeaderContainer />
            <h1>Home Page</h1>
            <HeroContainer title={"Halelieuyah holla"} subtitle={"Subtitle"} />
        </>
    )
}

export default Home
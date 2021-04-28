import React from 'react'
// import {PokemonConsumer} from '../utils/PokemonContext'
import HeaderContainer from '../containers/HeaderContainer'
import HeroContainer from '../containers/HeroContainer'
import CardsContainer from '../containers/CardsContainer'

const Home = () => {
    return (
        <>
            <HeaderContainer />
            <HeroContainer title={ "Poke Store" } subtitle={ "Home" } />
            <CardsContainer />
        </>
    )
}

export default Home
import React from 'react'
import HeaderContainer from '../containers/HeaderContainer.jsx'
import {PokemonConsumer} from '../utils/PokemonContext'
import HeroContainer from '../containers/HeroContainer'
import CardsContainer from '../containers/CardsContainer'

const Home = () => {
  
    return (
        <>
            <HeaderContainer />
            <HeroContainer title={"Halelieuyah holla"} subtitle={"Subtitle"} />
            <CardsContainer />
        </>
    )
}

export default Home
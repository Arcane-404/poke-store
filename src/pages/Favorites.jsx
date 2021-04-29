import React from 'react'
import { HeaderContainer, FavoritesContainer, HeroContainer } from '../containers/'


const Favorites = () => {
    return (
        <>
            <HeaderContainer />
            <HeroContainer title={ "Poke Store" } subtitle={ "Favorites" } />
            <FavoritesContainer/>
        </>
    )
}

export default Favorites
import React from 'react'
import { FavoritesContainer, HeroContainer } from '../containers/'

const Favorites = () => {
    return (
        <>
            <HeroContainer subtitle={ "Favorites" } />
            <FavoritesContainer/>
        </>
    )
}

export default Favorites
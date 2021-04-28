import React from 'react'
import { Header } from '../components'
import { HeartFillIcon , ShoppingCartFillIcon, HomeHeartFillIcon} from '../components/Icons/index'
import { PokemonConsumer } from '../utils/PokemonContext'

const HeaderContainer = () => {

    const { allCartItems, allFavorites } = PokemonConsumer()

    const allCartItemsNumber = allCartItems.length
    const allFavoritesNumber = allFavorites.length

    return (
        <Header>
            <Header.Inner>
                <Header.Logo to='/'>PokeApp</Header.Logo>
                <Header.LinksFrame>

                    <Header.Links to='/'>
                        <HomeHeartFillIcon/>
                    </Header.Links>

                    <Header.Links to='/favorites'>
                        {allFavoritesNumber}
                        <HeartFillIcon/>
                    </Header.Links>

                    <Header.Links to='/cart'>
                        {allCartItemsNumber}
                        <ShoppingCartFillIcon/>
                    </Header.Links>

                </Header.LinksFrame>
            </Header.Inner>
        </Header>
    )
}

export default HeaderContainer
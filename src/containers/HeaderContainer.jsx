import React from 'react'
import { Header } from '../components'
import { HeartFillIcon , ShoppingCartFillIcon, HomeHeartFillIcon} from '../components/Icons/index'
import { PokemonConsumer } from '../utils/PokemonContext'

const HeaderContainer = () => {

    const { allPokemons, allCartItems } = PokemonConsumer()

    const allCartItemsNumber = allCartItems.length

    let totalFavorites = 0;

    const getTotalFavorites = allPokemons.map( pokemon => {
        if(pokemon.isFavorite) {
            totalFavorites++
        }
    })

    return (
        <Header>
            <Header.Inner>
                <Header.Logo to='/'>PokeApp</Header.Logo>
                <Header.LinksFrame>

                    <Header.Links to='/'>
                        <HomeHeartFillIcon/>
                    </Header.Links>

                    <Header.Links to='/favorites'>
                        {totalFavorites}
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
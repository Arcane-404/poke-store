import React, {useState, useEffect} from 'react'
import { Header } from '../components/'
import { PokemonConsumer } from '../utils/PokemonContext'
import { HeartFillIcon, ShoppingCartFillIcon, HomeHeartFillIcon } from '../components/Icons/'
import pokeIcon from '../assets/images/pokeball.png'

const HeaderContainer = () => {

    const { allPokemons, allCartItems } = PokemonConsumer()
    const [totalFavorites, setTotalFavorites] = useState(0)

    const allCartItemsNumber = allCartItems.length

    useEffect( () => {

        let currentTotal = 0;

        allPokemons.forEach(pokemon => {
            if(pokemon.isFavorite) {
                currentTotal++
            }
        })
        setTotalFavorites(currentTotal)

    }, [allPokemons])

    return (
        <Header>
            <Header.Inner>
                <Header.Logo to='/' src={ pokeIcon } alt="poke-logo"  />
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
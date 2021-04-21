import React from 'react'
import { Header } from '../components/'

const HeaderContainer = () => {
    return (
        <Header>
            <Header.Inner>
                <Header.Logo to='/'>PokeApp</Header.Logo>
                <Header.LinksFrame>
                    <Header.Links to='/favorites'>
                        <i class="ri-heart-fill"></i>Favorites
                    </Header.Links>
                    <Header.Links to='/cart'>
                        <i class="ri-shopping-cart-fill"></i>    Carts
                    </Header.Links>
                </Header.LinksFrame>
            </Header.Inner>
        </Header>
    )
}

export default HeaderContainer
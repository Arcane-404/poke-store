import React from 'react'
import { Header } from '../components'
import { HeartFillIcon , ShoppingCartFillIcon } from '../components/Icons/index'

const HeaderContainer = () => {
    return (
        <Header>
            <Header.Inner>
                <Header.Logo to='/'>PokeApp</Header.Logo>
                <Header.LinksFrame>
                    <Header.Links to='/favorites'>
                        <HeartFillIcon/>
                    </Header.Links>
                    <Header.Links to='/cart'>
                        <ShoppingCartFillIcon/>
                    </Header.Links>
                </Header.LinksFrame>
            </Header.Inner>
        </Header>
    )
}

export default HeaderContainer
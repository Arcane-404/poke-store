import React from 'react'
import { HeaderContainer, HeroContainer, TableContainer, TotalContainer } from '../containers/'

const Cart = () => {
    return (
        <>
            <HeaderContainer />
            <HeroContainer title={ "Poke Store" } subtitle={ "Cart Page" } />
            <TableContainer />
            <TotalContainer />
        </>
    )
}

export default Cart
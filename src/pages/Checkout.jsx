import React from 'react'
import { HeaderContainer, HeroContainer, TableContainer, TotalContainer } from '../containers/'

const Cart = () => {
    return (
        <>
            <HeaderContainer />
            <HeroContainer title={ "Poke Store" } subtitle={ "Checkout" } />
            <TableContainer />
            <TotalContainer />
        </>
    )
}

export default Cart
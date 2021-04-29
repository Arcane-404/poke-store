import React from 'react'
import { HeroContainer, TableContainer, TotalContainer } from '../containers/'

const Cart = () => {
    return (
        <>
            <HeroContainer subtitle={ "Checkout" } />
            <TableContainer />
            <TotalContainer />
        </>
    )
}

export default Cart
import React from 'react'
import { HeaderContainer, HeroContainer, TableContainer } from './containers/'


const Cart = () => {
    return (
        <>
            <HeaderContainer/>
            <HeroContainer title={"Poke Shop"} subtitle={"Cart Page"} />
            <TableContainer />
        </>
    )
}

export default Cart
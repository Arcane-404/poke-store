import React from 'react'
import HeaderContainer from '../containers/HeaderContainer.jsx'
import TableContainer from '../containers/TableContainer'
import HeroContainer from '../containers/HeroContainer'

const Cart = () => {
  return (
    <>
      <HeaderContainer/>
      <h2>Cart Page</h2>
      <HeroContainer title={"Different text"} subtitle={" not Subtitle"} />
      <TableContainer />

    </>
  )
}

export default Cart
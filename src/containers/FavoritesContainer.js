import React from 'react'
import { Cards } from '../components/'
import { PokemonConsumer } from '../utils/PokemonContext'
const FavoritesContainer = () => {

    const { allFavorites, addToCart } = PokemonConsumer()

    return (
        <Cards>
            <Cards.Inner>
                {allFavorites.map( ( pokemon ) => (
                    <Cards.Card key={ pokemon.id }>
                        <Cards.Image src={ pokemon.image }/>
                        <Cards.Price> $ { pokemon.price } </Cards.Price>
                        <Cards.Name> { pokemon.pokemon } </Cards.Name>
                        <Cards.Body> { pokemon.description } </Cards.Body>
                        <Cards.Button onClick={() => addToCart(pokemon)}> Add To Cart </Cards.Button>
                    </Cards.Card>
                ))}
            </Cards.Inner>
        </Cards>
    )
}

export default FavoritesContainer
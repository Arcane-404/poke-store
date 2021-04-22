import React from 'react'
import { Cards } from '../components/'
import { PokemonConsumer } from '../utils/PokemonContext'
import { HeartLineIcon } from '../components/Icons/index'

const CardsContainer = () => {

    const { allPokemons } = PokemonConsumer()


    return (
        <Cards>
            <Cards.Inner>
                {allPokemons.map( ( pokemon ) => (
                    <Cards.Card key={ pokemon.id }>
                        <Cards.Image src={ pokemon.image }/>
                        <Cards.Favorite> 
                            <HeartLineIcon />
                        </Cards.Favorite>
                        <Cards.Price> $ { pokemon.price } </Cards.Price>
                        <Cards.Name> { pokemon.pokemon } </Cards.Name>
                        <Cards.Body> { pokemon.description } </Cards.Body>
                        <Cards.Button> Add To Cart </Cards.Button>
                    </Cards.Card>
                ))}
            </Cards.Inner>
        </Cards>
    )
}

export default CardsContainer
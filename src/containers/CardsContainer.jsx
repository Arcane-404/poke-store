import React from 'react'
import { Cards } from '../components/'
import { PokemonConsumer } from '../utils/PokemonContext'
import { HeartLineIcon, HeartFillIcon } from '../components/Icons/index'

const CardsContainer = () => {

    const { allPokemons, toggleFavorite } = PokemonConsumer()

    return (
        <Cards>
            <Cards.Inner>
                {allPokemons.map( ( pokemon ) => (
                    <Cards.Card key={ pokemon.id }>
                        <Cards.Image src={ pokemon.image }/>
                        <Cards.Favorite> 
                            {
                                pokemon.isFavorite === true  
                                ? <HeartFillIcon onClick={ () => toggleFavorite(pokemon.id)}/>
                                : <HeartLineIcon onClick={ () => toggleFavorite(pokemon.id)}/>
                            }
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
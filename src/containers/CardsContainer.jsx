import React from 'react'
import { Cards } from '../components/'
import { PokemonConsumer } from '../utils/PokemonContext'
import { HeartLineIcon, HeartFillIcon } from '../components/Icons/'

const CardsContainer = () => {

    const { allPokemons, toggleFavorite, addToCart } = PokemonConsumer()

    return (
        <Cards>
            <Cards.Inner>
                {allPokemons.map( ( pokemon ) => (
                    <Cards.Card key={ pokemon.id }>
                        <Cards.Image src={ pokemon.image }/>
                        <Cards.Favorite> 
                            {
                                pokemon.isFavorite === true  
                                ? <HeartFillIcon onClick={ () => toggleFavorite(pokemon.id, pokemon)}/>
                                : <HeartLineIcon onClick={ () => toggleFavorite(pokemon.id, pokemon)}/>
                            }
                        </Cards.Favorite>
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

export default CardsContainer
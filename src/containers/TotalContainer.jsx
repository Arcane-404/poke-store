import { PokemonConsumer } from '../utils/PokemonContext'
import { Total } from '../components/'

const TotalContainer = () => {
  const { allCartItems, totalCost, resetCart } = PokemonConsumer()

  if (!allCartItems.length) return (
    <h2>Empty Cart</h2>
  )

  return (
    <Total>
      <Total.Frame>
        <Total.Text> Total Cost: ${ totalCost } </Total.Text>
        <Total.Button onClick={ resetCart }> Reset Cart </Total.Button>
        <Total.Button onClick={ resetCart }> Checkout Items </Total.Button>
      </Total.Frame>
    </Total>
  )
}

export default TotalContainer
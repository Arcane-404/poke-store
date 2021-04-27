import { PokemonConsumer } from '../utils/PokemonContext'
import { Total } from '../components/'

const TotalContainer = () => {
  const { totalCost } = PokemonConsumer()

  return (
    <Total>
      <Total.Frame>
        <Total.Text> Total Cost: ${ totalCost } </Total.Text>
        <Total.Button> Reset Cart </Total.Button>
        <Total.Button> Checkout Items </Total.Button>
      </Total.Frame>
    </Total>
  )
}

export default TotalContainer
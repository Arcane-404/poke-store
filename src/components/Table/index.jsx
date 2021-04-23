import { PokemonConsumer } from '../../utils/PokemonContext'
import { 
  Container, TableFrame, TBody, Row, Column,
  Image, Input, Button
} from './styles/Table'


/*  
  const [ counter, setCounter ] = useState(item.quantity)
  const decrement = (e) => (counter > 1) && setCounter(counter - 1)
  const increment = (e) => (counter < 10) && setCounter(counter + 1)
  const handleCounter = (e) => setCounter(+e.target.value)
*/

export default function Table ({ children,...restProps }) {
  return (
    <Container
      { ...restProps }
    >{ children }
    </Container>
  )
}

// TableFrame, TBody, Row, Column

Table.TableFrame = ({ children,...restProps }) => {
  return (
    <TableFrame
      { ...restProps }
    >{ children }
    </TableFrame>
  )
}

Table.TBody = ({ children,...restProps }) => {
  return (
    <TBody
      { ...restProps }
    >{ children }
    </TBody>
  )
}

Table.Row = ({ children,...restProps }) => {
  return (
    <Row
      { ...restProps }
    >{ children }
    </Row>
  )
}

Table.Column = ({ children,...restProps }) => {
  return (
    <Column
      { ...restProps }
    >{ children }
    </Column>
  )
}

// Image, Input, Button

Table.Image = ({ children,...restProps }) => {
  return (
    <Image
      { ...restProps }
    >{ children }
    </Image>
  )
}

Table.Input = ({ children,...restProps }) => {
  const { updateItemFromCart } = PokemonConsumer()
  const updateItem = (e) => updateItemFromCart(e,'input')

  return (
    <Input
      onChange={ updateItem }
      { ...restProps }
    >{ children }
    </Input>
  )
}

Table.Button = ({ action, children,...restProps }) => {
  const { removeItemFromCart, updateItemFromCart } = PokemonConsumer()

  const decrement = (e) => updateItemFromCart(e,'decrement')
  const increment = (e) => updateItemFromCart(e,'increment')
  const removeItem = (e) => removeItemFromCart(e)

  const handleClick = (e) => {
    if (action === 'decrement') return decrement(e)
    if (action === 'increment') return increment(e)
    if (action === 'remove') return removeItem(e)
  }

  return (
    <Button
      onClick={ handleClick }
      { ...restProps }
    >{ children }
    </Button>
  )
}
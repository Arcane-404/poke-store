import { v4 as uuid } from 'uuid'
import { PokemonConsumer } from '../utils/PokemonContext'
import { SubtractLineIcon, AddLineIcon, CloseLineIcon } from '../components/Icons/'
import { Table } from '../components/'

const TableContainer = () => {
  
  const { allCartItems, removeItem,decrementItem, incrementItem } = PokemonConsumer()

  return (
    <Table>
      <Table.Frame>
        <Table.TBody>
          { allCartItems && allCartItems.map((item,idx) => (
            <Table.Row key={ uuid() }>
              <Table.Column>
                <Table.Image src={ item.image } alt={ `pokemon-${ item.pokemon }` } />
              </Table.Column>

              <Table.Column> <h2>{ item.pokemon }</h2> </Table.Column>
              
              <Table.Column>
                <Table.Button onClick={ () => decrementItem(idx) }> <SubtractLineIcon /> </Table.Button>
                <Table.Input type="number" value={ item.quantity } readOnly />
                <Table.Button onClick={ () => incrementItem(idx) }> <AddLineIcon /> </Table.Button>  
              </Table.Column>
              
              <Table.Column> <p>{ item.price * item.quantity }</p> </Table.Column>
              
              <Table.Column>
                <Table.Button onClick={ () => removeItem(idx) }> <CloseLineIcon size="30" /> </Table.Button>
              </Table.Column>
            </Table.Row>
          ))}        
        </Table.TBody>
      </Table.Frame>
    </Table>
  )
}

export default TableContainer
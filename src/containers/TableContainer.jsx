import { v4 as uuid } from 'uuid'
import { PokemonConsumer } from '../utils/PokemonContext'
import { SubtractLineIcon, AddLineIcon, CloseLineIcon } from '../components/Icons/'
import { Table } from '../components/'

const TableContainer = () => {
  const { 
    allCartItems, removeItem, 
    decrementItem, incrementItem, 
    updateItemValue 
  } = PokemonConsumer()

  return (
    <Table>
      <Table.Frame>
        <Table.TBody>
          { allCartItems && allCartItems.map((item,idx) => (
            <Table.Row key={ uuid() }>
              <Table.Column>
                <Table.Image src={ item.image } alt={ `pokemon-${ item.pokemon }` } />
              </Table.Column>

              <Table.Column> { item.pokemon } </Table.Column>
              
              <Table.Column>
                <Table.Button data-id={ idx } onClick={ decrementItem }> <SubtractLineIcon /> </Table.Button>
                {/* <Table.Input type="number" data-id={ idx } value={ item.quantity } readOnly /> */}
                <Table.Input type="number" data-id={ idx } value={ item.quantity } onChange={ updateItemValue } />
                <Table.Button data-id={ idx } onClick={ incrementItem }> <AddLineIcon /> </Table.Button>  
              </Table.Column>
              
              <Table.Column> $ { item.price } </Table.Column>
              
              <Table.Column>
                <Table.Button data-id={ idx } onClick={ removeItem }> <CloseLineIcon /> </Table.Button>
              </Table.Column>
            </Table.Row>
          ))}        
        </Table.TBody>
      </Table.Frame>
    </Table>
  )
}

export default TableContainer
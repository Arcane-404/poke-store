import { v4 as uuid } from 'uuid'
import { PokemonConsumer } from '../utils/PokemonContext'
import { SubtractLineIcon, AddLineIcon, CloseLineIcon } from '../components/Icons/'
import { Table } from '../components/'

const TableContainer = () => {
  // removeFromCart
  const { allCartItems } = PokemonConsumer()

  return (
    <Table>
      <Table.TableFrame>
        <Table.TBody>
          { allCartItems && allCartItems.map((item,idx) => (
            <Table.Row key={ uuid() }>
              <Table.Column>
                <Table.Image 
                  src={ item.image } 
                  alt={ `pokemon-${ item.pokemon }` }
                />
              </Table.Column>

              <Table.Column> { item.pokemon } </Table.Column>
              
              <Table.Column>
                <Table.Button action={ 'decrement' } data-id={ idx }> 
                  <SubtractLineIcon size="1em" />  
                </Table.Button>
                <Table.Input type="number" data-id={ idx } value={ item.quantity } />
                <Table.Button action={ 'increment' } data-id={ idx }> 
                  <AddLineIcon size="1em" />  
                </Table.Button>  
              </Table.Column>
              
              <Table.Column> $ { item.price } </Table.Column>
              
              <Table.Column>
                <Table.Button  action={ 'remove' } data-id={ idx }> 
                  <CloseLineIcon size="1em" />  
                </Table.Button>
              </Table.Column>
            </Table.Row>
          ))}        
        </Table.TBody>
      </Table.TableFrame>
    </Table>
  )
}

export default TableContainer
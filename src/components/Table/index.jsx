import { 
  Container, Frame, TBody, Row, Column,
  Image, Input, Button
} from './styles/Table'

export default function Table ({ children,...restProps }) {
  return (<Container { ...restProps }>{ children }</Container>)
}

// TableFrame, TBody, Row, Column

Table.Frame = function TableFrame ({ children,...restProps }) {
  return (<Frame { ...restProps }>{ children }</Frame>)
}

Table.TBody = function TableTBody ({ children,...restProps }) {
  return (<TBody { ...restProps }>{ children }</TBody>)
}

Table.Row = function TableRow ({ children,...restProps }) {
  return (<Row { ...restProps }>{ children }</Row>)
}

Table.Column = function TableColumn ({ children,...restProps }) {
  return (<Column { ...restProps }>{ children }</Column>)
}

// Image, Input, Button

Table.Image = function TableImage ({ ...restProps }) {
  return (<Image { ...restProps } />)
}

Table.Input = function TableInput ({ children,...restProps }) {
  return (<Input { ...restProps } />)
}

Table.Button = function TableButton ({ children,...restProps }) {
  return (<Button type="button" { ...restProps }> { children } </Button>)
}
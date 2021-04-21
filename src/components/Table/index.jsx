import { Container, TableFrame, TBody, Row, Column } from './styles/Table'

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
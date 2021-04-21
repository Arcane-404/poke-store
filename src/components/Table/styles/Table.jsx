import styled from 'styled-components'

export const Container = styled.section`
  background: #eee;
`

export const TableFrame = styled.table`
  border: 5px solid silver;
  margin: 0 auto;
`

export const TBody = styled.tbody`
  border: 1px solid red;
`

export const Row = styled.tr`
  border: 1px solid green;
  padding-bottom: 1em;
`
  
  export const Column = styled.td`
  border-bottom: 1px solid var(--other);
  // padding-bottom: 1em;

  img {
    border-radius: 50%;
    background: var(--other);
    width: 100px;
  }
` 
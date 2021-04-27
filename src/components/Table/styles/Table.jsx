import styled from 'styled-components'

export const Container = styled.section``

// TableFrame, TBody, Row, Column

export const Frame = styled.table`
  border: 5px solid silver;
  margin: 0 auto;
`

export const TBody = styled.tbody``

export const Row = styled.tr``
 
export const Column = styled.td`
  border-bottom: 1px solid var(--other);
  padding-bottom: 1em;
` 

// Image, Input, Button

export const Image = styled.img`
  border-radius: 50%;
  background: var(--other);
  width: 100px;
`
export const Input = styled.input`
  border: 3px solid silver;
  width: 50%;
  &:focus {
    border-color: black;
  }
`
export const Button = styled.button``

import styled from 'styled-components'

export const Container = styled.section``

// Frame, TBody, Row, Column

export const Frame = styled.table`
  width: 100%;
  max-width: 835px;
  margin: 0 auto;
`

export const TBody = styled.tbody``

export const Row = styled.tr`
  border-bottom: 1px solid var(--other);
  margin-top: 2.5em;
  display: flex;
  flex-flow: column;
  position: relative;

  @media (min-width: 600px) {
    display: table-row;
  }
`
 
export const Column = styled.td`
  text-align: center;
  /* border: 1px solid green; */

  &:nth-child(4) p {
    font-size: 1.5rem;
    width: max-content;
    margin: 0.75em auto;
    position: relative;

    &::before {
      content: '$';
      position: absolute;
      top: 0;
      right: 100%;
    }
  }
  &:nth-child(5) {
    position: absolute;
    top: 0;
    right: 10%;
  }
  
  @media (min-width: 600px) {
    padding: 1em 0.5em;
    
    &:nth-child(2) {
      text-align: left;
      width: 200px;
      padding-left: 1em;
    }
    &:nth-child(3) {
      min-width: 145px;
    }
    &:nth-child(4) {
      min-width: 75px;
    }
    &:nth-child(5) {
      position: initial;
    }
  }
` 

// Image, Input, Button

export const Image = styled.img`
  border-radius: 50%;
  background: var(--other);
  width: 125px;
  padding: 0.25em;
`

export const Input = styled.input`
  border: 3px solid silver;
  border-radius: 5px;
  text-align: center;
  width: 50px;
  height: 40px;
  margin: 0 0.3em;
`

export const Button = styled.button`
  border: unset;
  background: unset;
  color: var(--text-color);
  padding: 0;

  &:hover {
    color: var(--hero-bg);
  }
  &:active {
    color: var(--text-color);
  }

  & svg {
    /* background: unset; */
    /* border: unset; */
    vertical-align: middle;
  }
`

import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
`

export const Frame = styled.div`
  text-align: center;
  display: flex;
  flex-flow: wrap;
`

export const Text = styled.h3`
  order: 1;
  font-size: 1.5rem;
  flex-basis: 100%;
`

export const Button = styled.button`
  border: unset;
  border-radius: 0.3em;
  font-size: 1.125rem;
  width: 100%;
  /* width: 275px; */
  height: 45px;
  margin: 1em;
  background: var(--price-tag-bg);

  &:nth-child(2) {
    order: 3;
  }
  &:nth-child(3) {
    order: 2;
  }

  &:hover {
    background: var(--header-bg);
  }
  &:active {
    background: var(--price-tag-bg);
  }

  @media (min-width: 600px) {
    flex: 1;
    max-width: 275px;
  
    &:nth-child(2) {
      order: 2;
    }
    &:nth-child(3) {
      order: 3;
    }
  }
`
import styled from 'styled-components'

export const Container = styled.div``

export const Inner = styled.div`
    max-width: 1100px;
    margin: 100px auto;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    align-items: center;


    @media (min-width: 800px) {
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: center;
    }
`

export const Card = styled.div`
    width: 300px; 
    // height: 360px;
    // border: 1px solid black;
    border-radius: 1rem; 
    position: relative;
    text-align: center;
    background: var(--card-bg);
    margin: 1rem;
    padding: 1rem;
`

export const Image = styled.img`
    heigt: 120px;
    width: 120px;
`

export const Favorite = styled.i`
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
`

export const Price = styled.p`
    position: absolute;
    right: 0;
    top: -17px;
    background: var(--price-tag-bg);
    height: 50px;
    width: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 1rem;
`

export const Name = styled.h2``

export const Body = styled.p`
    width: 80%;
    margin: 0 auto;
    text-align: left;
    margin-bottom: 3rem;
`

export const Button = styled.button`
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    height: 50px;
    border-radius: 0 0 1rem 1rem;
    border: none;
    background: var(--add-to-cart-bg);
    color: #fff;
`
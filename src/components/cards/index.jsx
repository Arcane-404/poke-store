import React from 'react'
import { Container, Inner, Card, Image, Favorite, Price, Name, Body, Button } from './styles/cards'

export default function Cards({ children, ...restProps }) {
    return <Container {...restProps}> { children }</Container>
}

Cards.Inner = function CardsInner({ children, ...restProps }) {
    return (
        <Inner {...restProps}> { children } </Inner>
    )
}
Cards.Card = function CardsCard({ children, ...restProps }) {
    return (
        <Card {...restProps}> { children } </Card>
    )
}
Cards.Image = function CardsImage({ children, ...restProps }) {
    return (
        <Image {...restProps} />
    )
}
Cards.Favorite = function CardsFavorite({ id, children, ...restProps }) {
    return (
        <Favorite {...restProps}> 
            { children } 
        </Favorite>
    )
}
Cards.Price = function CardsPrice({ children, ...restProps }) {
    return (
        <Price {...restProps}> { children } </Price>
    )
}
Cards.Name = function CardsName({ children, ...restProps }) {
    return (
        <Name {...restProps}> { children } </Name>
    )
}
Cards.Body = function CardsBody({ children, ...restProps }) {
    return (
        <Body {...restProps}> { children } </Body>
    )
}
Cards.Button = function CardsButton({ children, ...restProps }) {
    return (
        <Button {...restProps}> { children } </Button>
    )
}
// Inner, Card, Image, Favorite, Price, Name, Body, Button

import React from 'react'
import { Container, Inner, Logo, Links, LinksFrame } from './styles/Header'
import {Link as ReachRouterLink} from 'react-router-dom'

export default function Header({ children, ...restProps }) {
    return <Container {...restProps}> { children } </Container>
}

// Inner, Logo, Links 
Header.Inner = function HeaderInner({ children, ...restProps }) {
    return (
        <Inner {...restProps}> { children } </Inner>
    )
}

Header.Logo = function HeaderLogo({ children, to, ...restProps }) {
    return (
        <ReachRouterLink to={to}>
            <Logo {...restProps} />
        </ReachRouterLink>
    )
}

Header.LinksFrame = function HeaderLinksFrame({ children, ...restProps }) {
    return <LinksFrame {...restProps}> { children } </LinksFrame>
}

Header.Links = function HeaderLinks({ children, ...restProps }) {
    return (
        <Links {...restProps}> { children } </Links>
    )
}
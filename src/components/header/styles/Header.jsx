import styled from 'styled-components'
// import { Link as ReachRouterLink } from 'react-router-dom'
import {Link} from 'react-router-dom';

export const Container = styled.div`
    background: var(--header-bg);
`

export const Inner = styled.div`
    display: flex;
    justify-content: space-between;
`

// export const Logo = styled.img``
export const Logo = styled.h1`
    margin-left: 1rem;
`

export const LinksFrame = styled.div`
    display: flex;
    align-items: center;
`

export const Links = styled(Link)`
    margin: 1rem;
`
import { Container, Title, Subtitle } from './styles/Hero'


export default function Hero ({ children,...restProps }) {
    return (
        <Container
            { ...restProps }
        >{ children }
        </Container>
    )
}

Hero.Title = ({ children,...restProps }) => {
    return (
        <Title
            { ...restProps }
        >{ children }
        </Title>
    )
}

Hero.Subtitle = ({ children,...restProps }) => {
    return (
        <Subtitle
            { ...restProps }
        >{ children }
        </Subtitle>
    )
}

import { Container, Frame, Text, Button } from './styles/Total'

export default function Total ({ children, ...restProps }) {
  return (<Container { ...restProps }>{ children }</Container>)
}

// Frame, Text, Button

Total.Frame = function TotalFrame ({ children, ...restProps }) {
  return (<Frame { ...restProps }>{ children }</Frame>)
}

Total.Text = function TotalText ({ children, ...restProps }) {
  return (<Text { ...restProps }>{ children }</Text>)
}

Total.Button = function TotalButton ({ children, ...restProps }) {
  return (<Button type="button" { ...restProps }>{ children }</Button>)
}

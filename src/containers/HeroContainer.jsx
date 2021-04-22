import React from 'react'
import { Hero } from '../components'

const HeroContainer = ({ title, subtitle }) => {
    return (
        <Hero>
            <Hero.Title>{ title }</Hero.Title>
            <Hero.Subtitle>{ subtitle }</Hero.Subtitle>
        </Hero>
    )
}

export default HeroContainer
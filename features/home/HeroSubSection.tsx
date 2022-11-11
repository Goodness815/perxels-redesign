import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { heroData } from '../../constant/heroData'
import { MainContainer } from '../../layouts'
import { HeroCard } from './HeroCard'

export const HeroSubSection = () => {
  return (
    <MainContainer>
      <SimpleGrid py={["3.75rem", "3.75rem", "7.125rem"]} columns={[1, 1, 2, 3]} spacing={["2.5rem", "2.5rem", "2.5rem", "3.5rem"]}>
        {heroData.map(({ title, content, image, color }) => (
          <HeroCard
            key={image}
            color={color}
            title={title}
            content={content}
            image={image}
          />
        ))}
      </SimpleGrid>
    </MainContainer>
  )
}
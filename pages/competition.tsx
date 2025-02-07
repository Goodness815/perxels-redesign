import React from 'react'
import {Hero, MarqueeComp, Info, OutlineSection, EventForm} from '../features/designher'
import { MainLayout } from '../layouts'
const designher = () => {
  return (
    <div>
        <MainLayout>
        <Hero />
        <MarqueeComp/>
        <Info/>
        <OutlineSection/>
        <EventForm />
        </MainLayout>
    </div>
  )
}

export default designher
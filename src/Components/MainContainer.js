import React from 'react'
import CardsContainer from './CardsContainer'
import ButtonList from './ButtonList'

const MainContainer = () => {
    
  return (
    <div className='flex flex-col'>
      <ButtonList/>
      <CardsContainer/>
    </div>
  )
}

export default MainContainer
import React, { useState } from 'react'
// import { useContext } from 'react'
// import { MainPageContext } from './Contexts/MainPageContext'
import TripInfo from './TripInfo'

const Content = () => {
  // const { currentTrip} = useContext(MainPageContext)
  let WindowHigh = document.documentElement.clientHeight - 200 - 135
  return (
    <div className='Content' style={{minHeight: WindowHigh}}>
      <TripInfo/>
    </div>
  )
}

export default Content
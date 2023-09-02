import React from 'react'
import { Linegraph } from './Linegraph'
import Leafletmap from './Leafletmap'
import "./Chartmap.css"

export const Chartandmap = () => {
  return (
    <div className='main-container'>
      <div className="linegraph">
      <Linegraph/>
      </div>
      <div className='leafLet'>
        <Leafletmap/>
      </div>
    </div>
  )
}

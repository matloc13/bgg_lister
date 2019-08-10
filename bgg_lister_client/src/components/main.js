import React from 'react'
import Game from './game'

const Main = (props) => {

  const {games,} = props

  return (
<main>
  {
    games &&
    games.geeklist.item.map((ele, index) => {
      return (
        <>
          <Game
            name={ele.objectname}
            lookup={ele.objectid}
            index={index}
          />
        </>
      )
    })
  }</main>
  )
}

export default Main

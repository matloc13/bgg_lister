import React from 'react'
import Game from './game'

const Main = (props) => {
  return (
<main>
  {
    props.games &&
    props.games.geeklist.item.map((ele, index) => {
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

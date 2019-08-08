import React, { useState, useEffect,} from 'react'

const Game = (props) => {

  const [currentGame, setCurrentGame] = useState()

  useEffect(() => {
    searchGame(props.lookup)
  },[])

  const searchGame = (id) => {
    fetch(`/bgg_lists/${id}`)
    .then(res => res.json())
    .then(json => setCurrentGame(json))
  }

  return (
    <article key={props.index}>
      <p onClick={() => { searchGame(props.lookup)}}
      >{props.name}</p>
      <p>{props.lookup}</p>
      {
        currentGame ?
          <img src={currentGame.items.item.thumbnail} alt={props.name}/>
        :''
      }
      <hr/>
    </article>
  )
}

export default Game

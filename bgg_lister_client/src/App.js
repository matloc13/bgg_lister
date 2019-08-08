import React, { useState, useEffect,} from 'react'
import Main from './components/main'
import './css/main.css'

function App() {

  const [games, setGames] = useState()

  useEffect(() => {
    getSolitaireList()
    console.log('did update');
  },[])

  const getSolitaireList = () => {
    fetch(`/bgg_lists`)
    .then(res => res.json())
    .then(json => setGames(json))
    .catch(err => console.error(err))
  }

  return (
    <div className="App">
      <Main
        games={games}
      />
    </div>
  )
}

export default App

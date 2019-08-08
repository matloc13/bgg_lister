import React, { useState, useEffect,} from 'react'
import Nav from './components/nav'
import DropMenu from './components/dropmenu'
import Main from './components/main'
import Footer from './components/footer'
import './css/main.css'

function App() {

  const [games, setGames] = useState()
  const [dropMenuShow, setDropMenuShow] = useState(false)

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

  const toggle = () => {
    setDropMenuShow(!dropMenuShow)
  }

  return (
    <div className="App">
      <Nav
        toggle={toggle}
      />
      {
        dropMenuShow &&
        <DropMenu />
      }

      <Main
        games={games}
      />
      <Footer />
    </div>
  )
}

export default App

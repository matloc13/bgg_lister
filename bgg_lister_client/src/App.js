import React, { useState, useEffect,} from 'react'
import Nav from './components/nav'
import DropMenu from './components/dropmenu'
import Main from './components/main'
import HotList from './components/hotlist';
import List from './components/list'
import Footer from './components/footer'
import './css/main.css'

function App() {

  const [user, setUser] = useState()
  const [games, setGames] = useState()
  const [list, setList] = useState([])
  const [dropMenuShow, setDropMenuShow] = useState(false)

  useEffect(() => {
    getUser(2)
    getSolitaireList()
    console.log('did load');
  },[])

  useEffect(() => {
    handleSubmitToList()
  },[list])

  const getUser = (id) => {
    fetch(`http://localhost:3000/users/${id}`)
    .then(res => res.json())
    .then(json => setUser(json))
    .catch(err => console.error(err))
  }

  const getSolitaireList = () => {
    fetch(`/bgg_lists`)
    .then(res => res.json())
    .then(json => setGames(json))
    .catch(err => console.error(err))
  }

  const handleSubmitToList = (event, gameInfo) => {

    fetch(`/listnames`, {
      body: JSON.stringify(gameInfo),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })


  }

  const toggle = () => {
    setDropMenuShow(!dropMenuShow)
  }


  return (
    <div className="App">
      <Nav
        toggle={toggle}
        user={user}
      />
      {
        dropMenuShow &&
        <DropMenu />
      }

      <Main
        games={games}
      />

      <HotList />

      <List/>

      <Footer />

    </div>
  )
}

export default App

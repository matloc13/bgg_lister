import React, { useState, useEffect,} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { BASE_URL } from './constants'
import Nav from './components/nav'
import DropMenu from './components/dropmenu'
import Main from './components/main'
import HotList from './components/hotlist';
import Lists from './components/lists'
import Footer from './components/footer'
import './css/main.css'

function App() {

  const [user, setUser] = useState()
  const [hotlist, setHotlist] = useState([])
  const [dropMenuShow, setDropMenuShow] = useState(false)
  const [favList, setFavList] = useState()

  useEffect(() => {
        console.log('did load');
    getUser(2)

    getHotList()
    return () => {
      console.log('clear hot list');
    }
  },[])

  // useEffect(() => {
  //   console.log(favList);
  //
  //   handleSubmitToList(favList, 2)
  // },[favList])



    const getHotList = () => {
      fetch(`${BASE_URL}/hotlists`)
      .then(res => res.json())
      .then(json => setHotlist(json))
      .catch(err => console.error(err))
  }

  const getUser = (id) => {
    fetch(`${BASE_URL}/users/${id}`)
    .then(res => res.json())
    .then(json => setUser(json))
    .catch(err => console.error(err))
  }




  // const handleSubmitToList = (gameInfo, uid, lid) => {
  //   // console.log(gameInfo.bggid)
  //
  //   fetch(`${BASE_URL}/users/${uid}/listnames/${lid}games`, {
  //     body: JSON.stringify(gameInfo),
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json, text/plain, */*',
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //
  //
  // }


  const toggle = () => {
    setDropMenuShow(!dropMenuShow)
  }


  return (

    <Router>
      <div className="App">
        <Nav
          toggle={toggle}
          user={user}
        />
        {
          dropMenuShow &&
          <DropMenu />
        }

        <Switch>



          <Route
            path="/matlocsolo"
            render={(props) =>
              <Main />}
          />

          <Route
            path="/" exact
            render={(props) =>
              <HotList {...props}
                hotlist={hotlist}
                setFavList={setFavList}
                favList={favList}
              />}
          />

          <Route
            path="/myLists"
            render={(props) =>
              <Lists {...props}
                uid={'2'}
              />}
          />
        </Switch>
        <Footer />

      </div>
    </Router>
  )
}

export default App

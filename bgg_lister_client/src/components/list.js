import React, { useState, useEffect,} from 'react'
import { BASE_URL } from '../constants'
import ListForm from './listform';
import Game from './game'


const List = (props) => {

  const { uid } = props

  const [showForm, setShowForm] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [list, setList] = useState([])

  useEffect(() => {
    getLists()
    // console.log(list);
  },[])

  const getLists = (uid) => {
    fetch(`${BASE_URL}/users/${uid}/listnames`)
    .then(res => res.json())
    .then(json => setList(json))
    .catch(err => console.error(err))
  }

  const createList = (event, fi, uid) => {
    fetch(`${BASE_URL}/users/${uid}/listnames`, {
      body: JSON.stringify(fi),
      method: 'POST',
      headers: {
        'Accept': 'application/json, plain/text',
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(json => setList([json, ...list]))
    .then(json => console.log(json))
    .catch(err => console.error(err))
  }

  const updateList = (event, fi, uid, lid) => {
    event.preventDefault()
    fetch( `${BASE_URL}/users/${uid}/listnames/${lid}`, {
      body: JSON.stringify(fi),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, plain/text',
        'Content-Type': 'application/json'
      }
    })
    .then(res => getLists(uid))
    .catch(err => console.error(err))
  }

  const deleteList = (event, uid, lid) => {
    fetch(`${BASE_URL}/users/${uid}/listnames/${lid}`, {
      method: 'DELETE',
      headers: {
        'Accept': 'application/json, text/plain',
        'Content-Type': 'application/json'
      }
    })
    .then(json => {
      const list = list.filter((list) => list.id !== lid)
      setList(list)
      getLists(uid)
    })
    .catch(err => console.error(err))
  }

  return (
<>
  <div>
    <button onClick={() => {
      setShowForm(!showForm)
    }}>
      {
        showForm ?
          "hide form"
        : 'create list'
      }

    </button>

    {  showForm &&
      <ListForm
        handleSubmit={createList}
        uid={uid}
      />
    }

  </div>

  <div ClassName={"listContainer"}>
    {  list && list.map((ele) => {
      return (
        <div key={ele.id}>
          <h3>{ele.title}</h3>
          <span
            onClick={() => {
              setShowEdit(!showEdit)
            }}>{
              showEdit ? 'close':'edit'}
          </span>
          {
            showEdit &&
            <>
              <span>update</span><span>X</span>
            </>
          }
        </div>
      )
    })
    }
  </div>

</>
  )
}

export default List

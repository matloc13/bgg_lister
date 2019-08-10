import React, { useState, useEffect,} from 'react'
import { BASE_URL } from '../constants'
import { Link } from 'react-router-dom';
import ListForm from './listform';
import List from './list'

// props
const Lists = (props) => {

  const { uid } = props
// state
  const [showForm, setShowForm] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  const [list, setList] = useState([])
  const [slist, setSlist] = useState({})

// lifecycle hooks
  useEffect(() => {
    getLists()
    // console.log(list);
  },[])

// requests
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
      const li = list.filter((ele) => ele.id !== lid)
      setList(li)
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

  <div className={"listContainer"}>
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
              <span onClick={() => {
                setSlist(ele)
              }}>
              update</span>

              <span onClick={() => {
                deleteList(ele, uid, ele.id)
              }}>
              X</span>
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

export default Lists

import React, {useState, useEffect,} from 'react'

const HotList = () => {

  const [hotlist, setHotlist] = useState([])

useEffect(() => {
  getHotList()
  return () => {
    console.log('clear hot list');
  }
},[])

  const getHotList = () => {
    fetch(`http://localhost:3000/hotlists`)
    .then(res => res.json())
    .then(json => setHotlist(json))
    .catch(err => console.error(err))
}

  return (
    <>
      {
        hotlist.items ?
          hotlist.items.item.map((ele, index) => {
            return (
              <div key={index}>

                <img src={ele.thumbnail.value} alt=""/>

              </div>
            )
          }):''
          }

    </>
  )
}

export default HotList

import React from 'react'

const HotList = (props) => {

  const { hotlist, setFavList, favList,} = props



  return (
    <>
      {
        hotlist.items ?
          hotlist.items.item.map((ele, index) => {
            return (
              <div key={index} onClick={() => {
                // setFavList(
                //   [...favList, ele]
                // )
                setFavList({
                  bggid: ele.id,
                  title: ele.name.value,
                  img: ele.thumbnail.value
                })
              }}>

                <img src={ele.thumbnail.value} alt={ele.name.value}/>

              </div>
            )
          }):''
          }

    </>
  )
}

export default HotList

import React from 'react'

const HotList = (props) => {

  const { hotlist, setFavList, favList,} = props


  return (
    <>
      {
        hotlist.items ?
          hotlist.items.item.map((ele, index) => {
            return (
              <div key={index}>
                <img src={ele.thumbnail.value} alt={ele.name.value}/>
              </div>
            )
          }):''
          }

    </>
  )
}

export default HotList

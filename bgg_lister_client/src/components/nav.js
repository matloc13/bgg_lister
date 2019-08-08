import React from 'react'

const Nav = (props) => {
  return (
    <nav>
      <span onClick={() => {
        props.toggle()
      }}>
        menu
      </span>
      <span>
        user
      </span>

    </nav>
  )
}

export default Nav;

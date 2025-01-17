import React from 'react'

const Header = ({title}) => {
  return (
    <header>
        <h1>{title}</h1>
    </header>
  )
}

//default header is given when nothing is passed as title
Header.defaultProps = {
    title: "To do list"
}
export default Header
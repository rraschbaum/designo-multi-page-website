import React from "react"

import { Link } from "gatsby"

const Navbar = () => {
  return (
    <header>
      <Link to="/">Designo</Link>
      <nav>
        <ul>
          <li>
            <Link to="/about">Our Company</Link>
          </li>
          <li>
            <Link to="/locations">Locations</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

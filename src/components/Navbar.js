import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <header>
      <Link to="/">Designo</Link>
      <nav>
        <ul>
          <li>
            <link to="/about">Our Company</link>
          </li>
          <li>
            <link to="/locations">Locations</link>
          </li>
          <li>
            <link to="/contact">Contact</link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

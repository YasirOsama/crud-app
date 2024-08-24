import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <h4 class="navbar-brand">Navbar</h4>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='/' class="nav-link active" >
            create post
            </Link>
        </li>
        <li class="nav-item">
          <Link to='/read' class="nav-link" >
            All post
            </Link>
        </li>
       
      </ul>
      <form class="d-flex">
        <input class="form-control me-2 w-50" type="search" placeholder="" ></input>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar


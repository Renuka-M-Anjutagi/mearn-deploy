import React from 'react'

const Menu = () => {
  return (
   
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">All painting</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/product">EXPLORE</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Abstract painting</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">3D MINIMALIST art</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Set Of 2</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          About Us
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/policy">ourstory</a></li>
            <li><a class="dropdown-item" href="/contact"> contactus</a></li>
            <li><a class="dropdown-item" href="/blog">Blog</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Menu

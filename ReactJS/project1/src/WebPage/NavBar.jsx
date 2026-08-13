function NavBar() {
  return (
    <>
       
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark m-0 p-2">
      
            <a class="navbar-brand fs-2 p-2 fw-bold text-success" href="#">
             AnJALI
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">

              <ul class="navbar-nav ms-auto align-items-lg-center">

                <li class="nav-item">
                  <a class="nav-link active" href="#">Home</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">About</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">Services</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">Portfolio</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">Team</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">Pricing</a>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">Blog</a>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                    Dropdown
                  </a>

                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Dropdown1</a></li>
                    <li><a class="dropdown-item" href="#">Dropdown2</a></li>
                    <li><a class="dropdown-item" href="#">Dropdown3</a></li>
                    <li><a class="dropdown-item" href="#">Dropdown4</a></li>
                  </ul>
                </li>

                <li class="nav-item">
                  <a class="nav-link" href="#">Contact</a>
                </li>

                <li class="nav-item ms-lg-3 mt-2 mt-lg-0">
                  <a href="#" class="btn btn-outline-light rounded-pill p-1 bg-primary text-white">
                    Get Started
                  </a>
                </li>

              </ul>

            </div> 
          
        </nav>
      
    </>
  )
}
export default NavBar;
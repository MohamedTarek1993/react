function Navbar(){


    return(
  <>
     <nav className="navbar navbar-expand-lg" id="navbar">
        <div className="container">
            <a className="navbar-brand" href="index.html">
                {/* <img src="image/logo.png" alt="logo"> */}
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="index.html">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about-us.html"> About us</a>
                    </li>
                   
                </ul>
            </div>
        </div>
    </nav>
  
  </>
    );
}

export default Navbar ;
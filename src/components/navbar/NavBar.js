import React from 'react';

function NavBar(){
    return <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
                <a style={{fontFamily: 'Sacramento',fontSize: 40, paddingRight: 20}}className="navbar-brand mr-auto mr-lg-0 text-info" href="#">FemCode  </a>
                <button className="navbar-toggler p-0 border-0" type="button" data-toggle="offcanvas">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <span>


                </span>

                <div style={{fontSize: 15}} className="navbar-collapse offcanvas-collapse" id="navbarsExampleDefault">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Collections
                            </a>
                            <div className="dropdown-menu" aria-labelledby="dropdown01">
                                <a className="dropdown-item" href="#">Autumn</a>
                                <a className="dropdown-item" href="#">Winter</a>
                                <a className="dropdown-item" href="#">Summer</a>
                            </div>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="#">
                                Shop <span class="sr-only">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Account
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-info my-2 my-sm-0" type="submit">
                            Buscar
                        </button>
                    </form>
                </div>
            </nav>
}

export default NavBar;


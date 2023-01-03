import React from 'react';
const NavBar = () => {
    return (
            
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" aria-label="Tenth navbar example">
                
                <div className="container-fluid">
                <a className="navbar-brand fw-bold" href="#">EventMe</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Parties">Parties</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Events">Events</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/courses">courses</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/competitions">competitions</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/hackathons">hackathons</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/aboutus">about us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contactus">contact us</a>
                            </li>
                        </ul>
                    </div>
                    {/* <button className='btn btn-primary'>Login</button>
                    <button className='ms-2 btn btn-success'>Signup</button> */}
                </div>
            </nav>
    );
}

export default NavBar;

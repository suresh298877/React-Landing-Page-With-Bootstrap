function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-md p-1 rounded">
                <div className="container-fluid">
                    <a className="navbar-brand text-warning" href="#"><h2>Navbar</h2></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-0">
                            <li className="nav-item me-2">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item me-2">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item me-2 dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu me-2">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li>
                        </ul>
                        <button className="btn">Login</button>
                        <button className="btn bg-warning">Get Started Free</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header;
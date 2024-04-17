import { FaSquareXTwitter, FaSquareFacebook, FaSquareInstagram, FaSquareGithub } from "react-icons/fa6";
function Footer() {
    return (
        <div className="container-fluid mb-5" style={{ paddingLeft: '7%', paddingRight: '7%' }}>
            <div className="container text-center ms-auto me-auto p-5">
                <h1>Ready to grow your business? Start with Apex, become faster every second</h1>
                <button className="btn btn-warning mt-4">Start Chatting Now</button>
            </div>
            <div className="row">
                <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start">
                    <a className="navbar-brand text-warning" href="#"><h2>Navbar</h2></a>
                </div>
                <div className="col-12 col-md-4">
                    <ul className="list-group list-group-horizontal d-flex justify-content-center">
                        <li className="list-group-item ms-1 me-1 border-0">About</li>
                        <li className="list-group-item ms-1 me-1 border-0">Features</li>
                        <li className="list-group-item ms-1 me-1 border-0">Works</li>
                        <li className="list-group-item ms-1 me-1 border-0">Support</li>

                    </ul>
                </div>
                <div className="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end">
                    <div className="">
                        <div className="d-inline me-3 text-warning"><FaSquareXTwitter /></div>
                        <div className="d-inline me-3 text-warning"><FaSquareFacebook /></div>
                        <div className="d-inline me-3 text-warning"><FaSquareInstagram /></div>
                        <div className="d-inline me-3 text-warning"><FaSquareGithub /></div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer;
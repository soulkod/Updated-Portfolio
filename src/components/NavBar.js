import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg sticky-top mt-md-5">
            <div className="container-fluid">
                <a className="navbar-brand text-white ms-3" href="#">Thato Makoela</a>
                <button className="navbar-toggler border-0 bg-transparent p-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <svg width="35px" height="35px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 18L20 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
                        <path d="M4 12L20 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
                        <path d="M4 6L20 6" stroke="#ffffff" stroke-width="2" stroke-linecap="round" />
                    </svg>
                </button>

                <div className="collapse navbar-collapse ls-5 text-white" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item me-3">
                            <a className="nav-link active text-white" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white me-3" href="#experience">Experience</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white me-3" href="">Education</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active text-white me-3" href="">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a
                                href="TS Makoela - Resume.pdf"
                                download="TS Makoela - Resume.pdf"
                                className="btn active text-black rounded-5 bg-white me-3"
                            >
                                <i className="bi bi-download me-2"></i>Download CV
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
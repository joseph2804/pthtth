
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Duong from "./Duong";
import Hiep from "./Hiep";
function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                    <img src='./images/logo.png' width={120} height={60} className="d-inline-block align-top" alt="" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Tra Cứu Thông Tin
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link to="/dashboard" className="dropdown-item">Phạm Hải Đường</Link>
                                <Link to="/dashboard1" className="dropdown-item">Đặng Duy Hiệp</Link>
                            </div>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
            
        
    );
}
export default Header
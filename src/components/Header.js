
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory
} from "react-router-dom";
function Header(props) {
    const history = useHistory();
    function logout() {
        localStorage.setItem('code', '');
        props.receive(false)
        history.push('/login');
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">
                    <img src='./images/logo.png' width={120} height={60} className="d-inline-block align-top" alt="" />
                </Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item dropdown">
                        <Link to="/login" className="dropdown-item">Tra cứu thông tin</Link>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        {  props.logined == true? <a onClick = {logout}><i className="fas fa-sign-out-alt ml-5" style={{cursor: 'pointer'}} ></i></a> : ''}
                    </form>
                </div>
            </nav>
            
        
    );
}
export default Header
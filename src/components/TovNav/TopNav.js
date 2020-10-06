import React, { useContext} from 'react';
import { Container, Navbar, Nav, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../logo.png'
import './topbar-style.css'

const TopNav = () => {

    const { allLogin } = useContext(UserContext)
    const [loggedInUser, setLoggedInUser] = allLogin

    return (
        <Container>
            <Navbar expand="lg">
                <Navbar.Brand>  <Link to="/"><img src={logo} alt="logo" className="brand__img" /> </Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link to="/" className="nav-link">Home</Link> 
                        <NavLink>Donate</NavLink>
                        <NavLink>Event</NavLink>
                        <Link to="/" className="nav-link">Register</Link>
                        <NavLink>{loggedInUser.name}</NavLink>
                        <Link to="/admin" className="nav-link">Admin</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <div className="row">
                <div className="col-md-6 mx-auto text-center">
                    <div className="search__area">
                        <h3 className="search_heading">I grow by helping people in need.</h3>
                        <div className="d-flex justify-content-center">
                            <input type="text" className="form-control w-50 d-inline" />
                            <button className="btn btn-primary d-inline">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default TopNav;
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import AuthService from '../Services/AuthService'
import { AuthContext } from '../Context/AuthContext'



const NavBar = props => {
    const {isAuthenticated,user,setIsAuthenticated,setUser} = useContext(AuthContext);
    
    const onClickLogOutHandler = ()=>{
        AuthService.logout().then(data=>{
            if(data.success){
                setUser(data.user);
                setIsAuthenticated(false);
            }
        });
    }

    const unauthenticatedNavBar = () => {
        const listUnauthenticatedItems = [
            'Home', 
            'Login', 
            'Register'
        ]
        return(
            <>
                
                {listUnauthenticatedItems.map(elem => {
                    return <Link key={ elem } to={elem === 'Home' ? '' : {pathname: `/${elem.toLowerCase()}`} }>
                              <li className="nav-item nav-link" key={ elem }>
                                { elem }
                              </li>
                            </Link>
                })}
            </>
        )
    }

    const authenticatedNavBar = () => {
        const listAuthenticatedItems = [
            'Home', 
            'Todos'
        ]
       
        return(
            <>
                {listAuthenticatedItems.map(elem => {
                    return <Link key={ elem } to={elem === 'Home' ? '' : {pathname: `/${elem.toLowerCase()}`} }>
                              <li className="nav-item nav-link" key={ elem }>
                                { elem }
                              </li>
                            </Link>
                            
                })}
                {
                    user.role === "admin" ? 
                    <Link to="/admin">
                        <li className="nav-item nav-link">
                            Admin
                        </li>
                    </Link> : null
                }
                <button type="button" 
                        className="btn btn-link nav-item nav-link" 
                        onClick={onClickLogOutHandler}>Logout</button>
            </>
        )
    }
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/">
                <div className="navbar-brand">ToDo App</div>
            </Link>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    { !isAuthenticated ? unauthenticatedNavBar() : authenticatedNavBar()}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
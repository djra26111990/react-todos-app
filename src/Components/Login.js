import React, { useState, useContext } from 'react'
import AuthService from '../Services/AuthService';
import Message from '../Components/Message';
import { AuthContext } from '../Context/AuthContext';


const Login = () => {
    const [user, setUser] = useState({ username: "", password: ""})
    const [message, setMessage] = useState(null);
    const authContext = useContext(AuthContext)

    const onChange = e => {
        e.preventDefault();
        setUser({...user, [e.target.name] : e.target.value});
    }

    const onSubmit = e => {
        e.preventDefault();
        AuthService.login(user).then(data => {
            const { isAuthenticated, user, message } = data;
            if(isAuthenticated){
                authContext.setUser(user);
                authContext.setIsAuthenticated(isAuthenticated)
                // eslint-disable-next-line no-undef
                props.history.push('/todos')
            } else {
                setMessage(message);
            }
        })
    }

    return(
        <div>
           <form onSubmit={onSubmit}>
                <div className="form-group">
                    <h3>Por favor inicie sesión</h3>
                    <label htmlFor="username" className="sr-only">Email</label>
                    <input type="text" 
                            name="username" 
                            className="form-control" 
                            id="username" 
                            aria-describedby="usernameHelp" 
                            onChange={onChange} 
                            placeholder="Introduzca un username"/>
                    <small id="usernameHelp" className="form-text text-muted">No se compartirá tu dirección email con nadie.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input type="password" 
                    className="form-control" 
                    id="password"
                    onChange={onChange} 
                    placeholder="Introduzca un password"
                    />
                </div>
                <button type="submit" className="btn btn-lg btn-primary btn-block">Log in</button>
            </form>
            {/*{ message ? <Message message={message}/> : null}*/}
        </div>
    )
}

export default Login;
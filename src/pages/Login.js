import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'

export default function Login() {
    const history = useHistory()
    const toBiodata = () => history.push('/biodata')
    const divStyle = {
        position: "fixed",
        top: "55%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "3px solid #f1f1f1",
    }
    const [state , setState] = useState({
        email : "",
        password : "",
    })
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const handleSubmitClick = (e) => {
        const userData = JSON.parse (localStorage.getItem("user"))
        e.preventDefault();
        if (state.email !== userData.email) {
            alert("Email not registered")
        } else if (state.password !== userData.password) {
            alert("Your password is incorrect")
        } else {
            localStorage.setItem("isLoggedIn", true)
            alert("Login success")
            alert("Redirecting you to your profile")
            toBiodata()
        }
    }
    return (
        <div>
            <div style={divStyle} className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <h1>LOGIN FORM</h1>
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                        className="form-control" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"
                        value={state.email}
                        onChange={handleChange} 
                />
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange} 
                />
                </div>
                <div className="form-check">
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >Login</button>
            </form>
        </div>
        </div>
    )
}

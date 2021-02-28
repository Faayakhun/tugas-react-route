import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'


export default function Register() {
    
    const history = useHistory()
    const toLogin = () => history.push('/login')
    const [state , setState] = useState({
        name: "",
        email : "",
        password : "",
        confirmPassword: "",
        hobby: "",
        favoriteFood:"",
        interest:""
    })
    
    const handleSubmitClick = (e) => {
        e.preventDefault();
        let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/
        if (reg.test(state.email) === false) {
            alert("You have entered invalid email")
        } else if(state.password !== state.confirmPassword) {
            alert("password do not match")
        } else if (state.password.length < 4) {
            alert ("Password must be at least 4 characters long")
        } else {
            localStorage.setItem("user", JSON.stringify(state))
            alert("Registration Success")
            alert("Redirect you to login page") 
            toLogin()  
            
        }
    }
    const handleChange = (e) => {
        const {id , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [id] : value
        }))
    }
    const divStyle = {
        position: "fixed",
        top: "55%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: "3px solid #f1f1f1",
    }
    return (
        <div>
            <div style={divStyle} className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <h1>REGISTRATION FORM</h1>
            <form>
            <div className="form-group text-left">
                <label htmlFor="exampleInputName">Name</label>
                <input type="text" 
                        className="form-control" 
                        id="name" 
                        placeholder="Enter Name"
                        value={state.name}
                        onChange={handleChange}
                />
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputName">Hobby</label>
                <input type="text" 
                        className="form-control" 
                        id="hobby" 
                        placeholder="Enter Hobby"
                        value={state.hobby}
                        onChange={handleChange}
                />
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputName">Favorite Food</label>
                <input type="text" 
                        className="form-control" 
                        id="favoriteFood" 
                        placeholder="Enter Favorite Food"
                        value={state.favoriteFood}
                        onChange={handleChange}
                />
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputName">Interest</label>
                <input type="text" 
                        className="form-control" 
                        id="interest" 
                        placeholder="Enter Interest"
                        value={state.interest}
                        onChange={handleChange}
                />
                </div>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input type="email" 
                        className="form-control" 
                        id="email" 
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
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Confirm Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="confirmPassword" 
                        placeholder="Confirm Password"
                        value={state.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
        </div>
        </div>
    )
}
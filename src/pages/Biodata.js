import React from 'react'
import { useHistory } from 'react-router-dom'
import Register from './Register'

import './biodata.css'

import avatar from '../assets/avatar.jpg'

export default function Biodata() {
    const handleSubmitClick = (e) => {
        alert("You have been logged out")
        localStorage.clear()
        e.preventDefault();
        toHome()
    }
    const userData = JSON.parse (localStorage.getItem("user"))
    const history = useHistory()
    const isLogin = localStorage.getItem("isLoggedIn")
    const toHome = () => history.push('/home')
    const toRegister = () => history.push('/register')
    if (!isLogin) {
        toRegister()
        return (<Register />)
    } else {
    return (
        <div>
            <div className="containerProfile">
                <img
                    src = {avatar}
                    className = "avatar"
                />
            </div>
            <div className="containerProfileContent">
                <h1>{userData.name}</h1>
            </div>
            <div className="containerProfileDetail">
                <h5>Profile Detail :</h5>
                <br/>
                <h4>Hobby :</h4>
                <p>{userData.hobby}</p>
                <br/>
                <h4>Favorite Food :</h4>
                <p>{userData.favoriteFood}</p>
                <br/>
                <h4>Interest :</h4>
                <p>{userData.interest}</p>
            </div>
            <div className="containerProfileContent">
            <button 
                    type="submit" 
                    className="btn btn-danger"
                    onClick={handleSubmitClick}
                >Logout</button>
            </div>
        </div>
    )
}
}
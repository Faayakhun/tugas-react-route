import React from 'react'
import { useHistory } from 'react-router-dom'
import { datas } from './DataGallery'
import Register from './Register'

import './gallery.css'

export default function Gallery() {
    const userData = JSON.parse (localStorage.getItem("user"))
    const cardItem = datas.map((item) => 
    <div className="col">
                                   <div className="card shadow-sm border-dark">
                                    
                                    <img src={item.image} className="cardImg" alt=""/>
                                
                                    <div className="card-body">
                                      <h5 className="card-title fs-3 fw-normal">{item.name}</h5>
                                
                                    </div>
                                  </div>
                                </div>
    )
    const history = useHistory()
    const isLogin = localStorage.getItem("isLoggedIn")
    const toRegister = () => history.push('/register')
    if (!isLogin) {
        toRegister()
        return (<Register />)
    } else {
    return (
        <div>
            <div className="userStyle">
                <h1>{userData.name} photo gallery</h1>
            </div>
            <div className="album py-5 bg-light">
                <div className="container">
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {cardItem}
                    </div>
                </div>
            </div>
        </div>
    )
}
}
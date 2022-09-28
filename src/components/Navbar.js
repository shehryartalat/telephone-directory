import React, { useState } from 'react'
import Login from './Login';


import {
    Link
} from "react-router-dom";


export default function Navbar() {
    const [modalShow, setModalShow] = useState(false);







    return (
        <nav className="navbar navbar-expand-sm bg-dark  navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand">Public Telephone Directory</a>



                    <Link className="nav-link active text-light " aria-current="page" to="/">Home</Link>
                    <Link className="nav-link active  text-light" aria-current="page" to="/about">About</Link>


                <button className='bg-dark' style={{ border: 'none' }} onClick={() => setModalShow(true)}>
                    <i className="fa-solid fa-arrow-right-to-bracket text-white fa-lg"></i>
                </button>

            </div>

            <Login show={modalShow}
                onHide={() => setModalShow(false)} />



        </nav >


    )
}

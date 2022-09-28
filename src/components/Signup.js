import React, { useState } from 'react'
import { Modal } from 'react-bootstrap';
import './login.css'

export default function Signup(props) {


    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
        >

            <div className="container login-container p-0" style={{ height: '70vh' }}>
                <div className="modal-dialog-centered rounded-end p-0">
                    <div className="col-md-6 back align-center m-0 p-0 text-white" style={{ height: '70vh' }}>
                        <h3 className='text-center pt-5'>Signup Form</h3><br />
                        <div className='m-4 p-4'>
                            <p>Register and create an account on </p>
                            <p>Public telephone Directory.write</p>
                            <p>Public telephone number anytime and</p>
                            <p>anywhere.</p>
                        </div>
                    </div>


                    <div className="col-md-6 login-form-2 p-5 m-4">

                        <div className="form-group">
                            <input type="text" className="large-input roundedField m-2" size={25} placeholder="Your Name *" />
                        </div>

                        <div className="form-group">
                            <input type="text" className="large-input roundedField m-2" size={25} placeholder="Your Email *" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="large-input roundedField m-2" size={25} placeholder="Your Password *" />
                        </div>

                        <div className="form-group">
                            <input type="password" className="large-input roundedField m-2" size={25} placeholder="Confirm your password *"  />
                        </div>

                        <div className="d-grid gap-2 col-6 m-4">
                            <button className="btn btn-dark" type="button">Sign up</button>
                        </div>
                    </div>
                </div>
            </div>

        </Modal>
    )
}

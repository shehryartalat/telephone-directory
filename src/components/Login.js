import React,{useState} from 'react'
import { Modal } from 'react-bootstrap';
import './login.css'
import Signup from './Signup';

export default function Login(props) {
    const [modalSignup,setSignupShow] = useState(false);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
        >


            <div className="container login-container p-0" style={{ height: '49.5vh' }}>
                <div className="modal-dialog-centered rounded-end p-0">
                    <div className="col-md-6 back align-center pt-5 m-0 p-0 text-white" style={{ height: '50vh' }}>
                        <h3 className='text-center pt-3'>Login Form</h3><br />
                        <div className='m-2 p-2'>
                            <p>Login and start adding the Contacts.</p>
                            <p>Do not have an account? <strong role='button' onClick={() => setSignupShow(true)}>Signup</strong></p>
                        </div>
                    </div>


                    <div className="col-md-6 login-form-2 p-5 m-4">

                        <div className="form-group">
                            <input type="text" className="large-input roundedField m-2" size={25} placeholder="Your Email *" />
                        </div>
                        <div className="form-group">
                            <input type="password" className="large-input roundedField m-2" size={25} placeholder="Your Password *" />
                        </div>
                        <div className="d-grid gap-2 col-6 m-4">
                            <button className="btn btn-dark" type="button">Sign in</button>
                        </div>
                    </div>
                </div>
            </div>

            <Signup
                show={modalSignup}
                onHide={() => setSignupShow(false)}
            />


        </Modal >
    );
}
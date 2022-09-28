import React, { useState, useEffect } from 'react'
import { Modal } from 'react-bootstrap'
import Login from './Login'
import './login.css'

export default function AddNumber(props) {
    const [title, settitle] = useState('')
    const [name, setname] = useState('')
    const [phone, setphone] = useState('')
    const [categories, setcategories] = useState('')
    const [errorTitle, setErrorTitle] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorPhone, setErrorPhone] = useState('')
    const [errorcategories, setErrorCategories] = useState('')
    const [value, setValue] = useState([])
    const [button, setbuttonshow] = useState(true)

    const [inputValue, setInputValue] = useState({
        title: '',
        name: '',
        phone: '',
        categories: ''
    })




    const onChange = (e) => {
        setInputValue({ ...inputValue, [e.target.name]: e.target.value })
        if (e.target.name === 'title') {
            setErrorTitle('')
            if (e.target.value == "") {
                setErrorTitle('invalid input')
            }
            else {
                let titleexp = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/;
                if (!titleexp.test(e.target.value)) {
                    setErrorTitle('invalid input')
                }
                else {
                    setErrorTitle('')

                    setbuttonshow(false);
                }
            }
        }

        if (e.target.name === 'name') {

            setErrorName('')
            if (e.target.value == "") {
                setErrorName('invalid input')
            }
            else {
                let namex = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/
                if (!namex.test(e.target.value)) {
                    setErrorName('invalid input')
                }

            }
        }

        if (e.target.name === 'phone') {

            setErrorPhone('')
            if (e.target.value == '') {
                setErrorPhone('invalid input')
            }
            else {
                let phonex = /(^(\+92)[0-9]{10}$)/
                if (!phonex.test(e.target.value)) {
                    setErrorPhone('invalid input')
                }
            }
        }


        if (e.target.name === 'categories') {

            setErrorCategories('')
            if (e.target.value == '') {
                setErrorCategories('inavlid input')
            }
        }


    }








    const submit = () => {




        let x = JSON.parse(localStorage.getItem('data'));



        props.setList(list => [...list, { 'Title': title, 'Name': name, 'Phone': phone, 'Categories': categories }]);

        if (x === null)
            localStorage.setItem('data', JSON.stringify([{ 'Title': title, 'Name': name, 'Phone': phone, 'Categories': categories }]))

        else {
            x.push({ 'Title': title, 'Name': name, 'Phone': phone, 'Categories': categories })


            localStorage.setItem('data', JSON.stringify(x))
        }

        localStorage.getItem(value)
    }

    return (
        <Modal
            {...props}
            // size="lg"
            aria-labelledby="contained-modal-title-vcenter"
        >


            <div className="container form-control">
                <h3 className="text-center">Add Contct Information</h3>
                <div className="modal-dialog-centered rounded-end p-0" style={{ height: '50vh' }}>
                    <form className="container">

                        <div className="col login-form-2">

                            <div className="form-contorl" style={{ height: '8vh' }}>
                                <input type="text" className="form-select roundedField m-1" name='title' value={inputValue.title} size={33} onChange={onChange} placeholder="Title *" />
                                {errorTitle !== '' ? <p className='text-danger'>{errorTitle}</p> : ''}
                            </div>

                            <div className="col">
                                <select id="" onChange={onChange} name='categories' value={inputValue.categories} className="form-select roundedField m-1 " >
                                    <option value="0" disabled selected hidden>Categories</option>
                                    <option value="Police">Police</option>
                                    <option value="Hospital">Hospital</option>
                                    <option value="Workshop">Workshop</option>
                                    <option value="Barber">Barber</option>
                                    <option value="Butcher">Butcher</option>
                                    <option value="Super Store">Super Store</option>
                                    <option value="Office">Office</option>
                                    <option value="Ben's Teacher">Ben's Teacher</option>
                                    <option value="School">School</option>
                                </select>
                                {errorcategories !== '' ? <p className='text-danger '>{errorcategories}</p> : ''}
                            </div>
                            <hr></hr>
                            <h6>contact Info</h6>
                            <div className="form-contorl" style={{ height: '8vh' }}>
                                <input type="text" className="form-select roundedField m-2" onChange={onChange} size={33} placeholder="Name *" name='name' value={inputValue.name} />

                                {errorName !== '' ? <p className='text-danger'>{errorName}</p> : ''}
                            </div>

                            <div className="form-contorl" style={{ height: '8vh' }}>
                                <input type="text" className="form-select roundedField m-2" onChange={onChange} size={33} placeholder="Your Phone *" name='phone' value={inputValue.phone} />

                                {errorPhone !== '' ? <p className='text-danger'>{errorPhone}</p> : ''}
                            </div>
                            <div className='text-center'>
                                <button type="button" onClick={submit} className="btn btn-outline-dark" disabled={button}>Add contact</button>
                            </div>

                        </div>

                    </form>
                </div>
            </div>


        </Modal >
    )
}

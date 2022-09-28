import React, { useState, useEffect } from 'react'
import AddNumbermodal from './AddNumber'

export default function Form(props) {

    const [AddNumber, setAddNumbershow] = useState(false)


    useEffect(() => {

    }, [props.list])



    return (
        <div className="container-fluid py-3 h-100" id='bck'>
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className='text-center '>
                    <button type="button" onClick={() => setAddNumbershow(true)} className="btn btn-outline-dark dark"><i class="fa-sharp fa-solid fa-user-plus"></i> Add contact</button>
                </div>
            </div>
            <AddNumbermodal
                show={AddNumber}
                list={props.list} setList={props.setList}
                onHide={() => setAddNumbershow(false)}
            />
        </div>

    )
}
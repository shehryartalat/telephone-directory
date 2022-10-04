import React, { useEffect, useState } from 'react'

export default function List(props) {
    const [value, setValue] = useState([])

    useEffect(() => {
        setValue(props.list)

    })
    return (
        <div className='container'>
            <div className='row container'>
                {
                    value.map((data) => {
                        return <div key={data.value} className='mx-5 col-lg-3 col-md-6 col-sm-12 container bg-dark text-white m-2' style={{ borderRadius: '15px' }}>
                            {data.Title}<br />
                            {data.Name}<br />
                            <hr></hr>
                            {data.Phone}<br />
                            {data.Categories}
                        </div>
                    }
                    )
                }
            </div>
        </div>

    )
}

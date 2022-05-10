import React from 'react'
import './Read.css'

const Read = () => {
    const read_data = [
        {
            title: "The right quality",
            description: "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.",
        },
        {
            title: "The right quality",
            description: "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.",
        },
        {
            title: "The right quality",
            description: "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.",
        },
    ]
    return (
        <>
            <div className="container-fluid read my-5">
                <h3 className='text-center mt-5'>HAVE A READ</h3>
                {read_data.map((data, index) => {
                    const { title, description } = data
                    return (
                        <div className="container read-card my-5" key={index}>
                            <h5 className='fw-500'>{title}</h5>
                            <p className='mt-3'>{description}</p>
                            <a href="#" className='me-2'>READ MORE <i className="fa-solid fa-chevron-right"></i></a>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Read
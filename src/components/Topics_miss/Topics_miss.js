import React from 'react'
import './Topics_miss.css'
import img1 from '../../assets/topics-1.png'
import img2 from '../../assets/topics-2.png'

const Topics_miss = () => {
    const topics_miss_data = [
        {
            title: "topics you can’t miss",
            description: "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.",
            img: img1
        },
        {
            title: "topics you can’t miss",
            description: "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada.",
            img: img2
        },
    ]
    return (
        <>
            <div className="container-fluid topic my-5">
                <h3 className='text-center'>TOPICS YOU CAN'T MISS</h3>
                {topics_miss_data.map((data, index) => {
                    const { title, description, img } = data
                    return (
                        <div className="container topic-card p-4 my-5" style={{ backgroundImage: `url(${img})` }} key={index}>
                            <h5 style={{ textTransform: "uppercase" }}>{title}</h5>
                            <div className='desc-div my-4'>
                                <p>{description}</p>
                            </div>
                            <a href="#" className='mt-4'>READ MORE <i className="fa-solid fa-chevron-right"></i></a>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Topics_miss
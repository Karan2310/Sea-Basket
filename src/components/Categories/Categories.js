import React from 'react'
import img from '../../assets/cate-2.png'
import './Categories.css'

const Categories = () => {
    const Categories = [
        {
            name: "Fish",
        },
        {
            name: "crustaceans",
        },
        {
            name: "Fish",
        },
    ]
    return (
        <>
            <div className="container-fluid my-5 px-md-5 category">
                <h4 className='mt-5 text-center text-lg-start' style={{ letterSpacing: "2px" }}>CATEGORIES</h4>
                <div className='d-flex flex-column flex-lg-row align-items-center justify-content-evenly w-100 my-5'>
                    {Categories.map((category, index) => {
                        return (
                            <div className="category-card d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0" key={index}>
                                <img src={img} alt={category.name} className='img-fluid' />
                                <p>{category.name}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Categories
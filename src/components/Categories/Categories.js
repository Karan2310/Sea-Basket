import React, { useEffect, useState } from 'react'
import img from '../../assets/cate-2.png'
import './Categories.css'
import firebase from '../../Firebase'

const Categories = () => {

    const database = firebase.firestore().collection("categories");
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    const getData = () => {
        database.onSnapshot((snapshot) => {
            const items = []
            snapshot.forEach((doc) => {
                items.push(doc.data())
                setCategories(items)
                setLoading(false)
            })
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <>
            <div className="container-fluid my-5 px-md-5 category">
                <div className="container">
                    <h4 className='mt-5 text-center text-lg-start' style={{ letterSpacing: "2px" }}>CATEGORIES</h4>
                    <div className='d-flex flex-column flex-lg-row align-items-center justify-content-between w-100 my-5'>
                        {loading === true ? <h1>Loading...</h1> : ""}
                        {loading === false && (categories.map((category, index) => {
                            return (
                                <div className="category-card d-flex flex-column align-items-center justify-content-center mb-5 mb-lg-0 " key={index}>
                                    <img src={category.image} alt={category.name} className='img-fluid' />
                                    <p>{category.name}</p>
                                </div>
                            )
                        }))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Categories
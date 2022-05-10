import React from 'react'
import './FAQ.css'

const FAQ = () => {
    const faq = [
        {
            question: "Velit venenatis pretium mattis consectetur massa pretium mattis ?",
            answer: "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada."
        },
        {
            question: "Velit venenatis pretium mattis consectetur massa pretium mattis ?",
            answer: "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada."
        },
        {
            question: "Velit venenatis pretium mattis consectetur massa pretium mattis ?",
            answer: "Nulla amet ut massa sapien nibh. Sed quis sollicitudin ut senectus nisl adipiscing posuere et a. Tincidunt consectetur sapien pellentesque vitae, nulla vitae sed feugiat. Consectetur hendrerit massa felis, et. Cursus tortor ut fames sapien a vulputate amet malesuada."
        },
    ]
    return (
        <>
            <div className="container-fluid my-5">
                <h3 className='text-center my-5'>FAQS</h3>
                <div className="container">
                    {faq.map((faq, index) => {
                        return (
                            <div className="accordion accordion-flush my-4" id="accordionFlushExample" key={index}>
                                <div className="accordion-item">
                                    <h2 className="accordion-header" id={`#Acc-${index}`}>
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#Acc-${index}`} aria-expanded="false" >
                                            {faq.question}
                                        </button>
                                    </h2>
                                    <div id={`Acc-${index}`} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body mt-3">{faq.answer}</div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default FAQ

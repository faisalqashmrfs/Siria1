import React from 'react'
import qoute from '../../assets/icons/qoute.svg'
import './Quote.css'

const Quote = () => {

    return (
        <div className="na-qoute">
            <div className="na-rectangle1">
                <img src={qoute} alt="quote" className="quote-icon" />
                <span>سورية تعمل على سد الفجوة بين الإنتاج الزراعي والتسويق بمعايير الجودة والتميز</span>
                <h6>سيريا لمنتجات الطبيعة</h6>
            </div>
        </div>
    )
}

export default Quote
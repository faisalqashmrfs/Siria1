import React from 'react'
import './SectionEndPage.css'
import NewsLetterForm from '../News Letter Form/NewsLetterForm'
import Footer from '../Footer/Footer'

const SectionEndPage = () => {
    
    return (
        <div className='SectionEndPage'>
            <div className='HJ_NewsLetterForm'><NewsLetterForm /></div>
            <div className='HJ_Footer'><Footer /></div>

        </div>
    )
}

export default SectionEndPage
import React from 'react'
import './TitleSection.css'

interface PropsTitleSection {
    title_section: string,
    className?: string
}

const TitleSection: React.FC<PropsTitleSection> = ({ title_section , className }) => {
    return (
        <div className='HJ_TitleSection'>
            <div className="na-title">
                <h3>{title_section}</h3>
                <div className={`${className ? `${className} HJ_Flex_line` : 'HJ_Flex_line'}`}>
                    <div className="na-green-line_Right"></div>
                </div>
            </div>
        </div>


    )
}

export default TitleSection
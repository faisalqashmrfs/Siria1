import React from 'react';
import './Isosection.css';
import iso_icon from '../../assets/icons/leaf.svg';

interface IsoSectionProps {
    title: string;
}

const Isosection: React.FC<IsoSectionProps> = ({ title }) => {
    return (
        <div className="na-isosection">
            <img src={iso_icon} alt="Logo" />
            <span className='NA_title_Iso'>{title}</span>
        </div>
    )
}

export default Isosection














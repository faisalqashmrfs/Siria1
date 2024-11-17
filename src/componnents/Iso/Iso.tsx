import React from 'react';
import './Iso.css';
import isoimg from '../../assets/images/home/iso.webp';

import Icon from '../../assets/icons/butn.svg';

import { Link } from 'react-router-dom';
import TitleSection from '../TitleSection/TitleSection';
import Isosection from '../Isosection/Isosection';





const Iso = () => {
    return (
        <div className="na-iso HJ_MarginSection_Iso HJ_MarginSection">

            <TitleSection title_section="شهادة الآيزو 9001" className='HJ_DirectionRight' />

            <div className="na-iso-container">
                <img src={isoimg} alt="Logo" className="na-iso-image" />
                <p>شهادة الآيزو لتصنيع وبيع منتجات الأعشاب الطبية الطبيعية ومنتجات العسل تتضمن عدة نقاط</p>
                <div className="na-icons">
                    <div className="na-icons-part1">
                        <Isosection title="الجودة والأمان"  />
                        <Isosection title="الارتقاء بالصحة والعافية"/>
                        <Isosection title="الاستدامة" />
                    </div>
                    <div className="na-icons-part2">
                        <Isosection title="الشفافية والمسؤولية" />
                        <Isosection title="الامتثال للمعايير" />
                    </div>
                </div>

                <Link to="/certifications">
                    <button className="na-read-more-button">
                        اقرأ المزيد
                        <img src={Icon} alt="Arrow" className="na-button-icon" />
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default Iso;

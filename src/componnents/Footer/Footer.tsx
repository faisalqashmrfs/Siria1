import React, { useEffect, useState } from 'react';
import './Footer.css';
import footerLogo from '../../assets/images/footer_logo.svg';
import phone from '../../assets/icons/footer/phone-call-01.svg';
import msg from '../../assets/icons/footer/_x39__18_.svg';
import Focalx from './../../assets/icons/footer/Focal x.svg'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ColorContext } from '../../Contexts/ColorContext';


type TBrandData = {
    id: number,
    name: string
}

type TContactData = {
    email: string,
    phone_number: string,
}

const Footer = () => {

    const [brandData, setBrandData] = useState<TBrandData[]>([]);
    const [contactData, setContactData] = useState<TContactData>();

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/brands-published')
            .then((res) => setBrandData(res.data.data))
            .catch((err) => console.error(err))

        axios.get('http://127.0.0.1:8000/api/contacts/1')
            .then(res => setContactData(res.data.data))
            .catch((err) => console.error(err))
    }, []);

    const handeleClickOnBrand = (id: number) => {
        navigate(`/brands/${id}`);
    }

    const { brandColor } = React.useContext(ColorContext);
    const mystyle = {
        backgroundColor: `${brandColor}`
    }

    return (
        <>
            <div style={mystyle} className="na-footer">
                <div className="na-container">
                    <div className="na-sec1">
                        <img src={footerLogo} alt="Footer Logo" />
                        <div className='NA_Footer_paragraph'>
                            <p > تأسست شركة سيريا عام 2021، لتكون فصلاً سورياً جديداً في قصة عطاء الأرض والإنسان. من قلب جبال الساحل   السوري، كلمتنا الأولى كُتبت . </p>
                        </div>
                    </div>
                    <div className='NA_Small_Sections'>
                        <div className="na-sec2">
                            <span className='MA_title'>روابط</span>
                            <Link to='/certifications'>
                                <span className='MA_paragraph'> الشهادات</span>
                            </Link>
                            <Link to='/#policies'>
                                <span className='MA_paragraph'> السياسة</span>
                            </Link>
                        </div>


                        <div className="na-sec3">
                            <span className='MA_title'>العلامات التجارية</span>
                            {brandData.map((item, index) => {
                                return (
                                    <span key={index} onClick={() => handeleClickOnBrand(item.id)} className='MA_paragraph'> {item.name}</span>
                                )
                            })}
                        </div>


                        <div className="na-sec4">
                            <span className='MA_title'> التواصل</span>
                            <div className="na-contact-item">
                                <div className="na-icon-container">
                                    <img src={phone} alt="phone" />
                                </div>
                                <span className='MA_paragraph'>{contactData?.phone_number}</span>
                            </div>
                            <div className="na-contact-item">

                                <div className="na-icon-container">
                                    <img src={msg} alt="msg" />
                                </div>
                                <a className='MA_paragraph'>{contactData?.email}</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="na-line"></div>
                <div className="na-footer-bottom">
                    <div className='NA_Flex_footer_bottom'>
                        <img src={Focalx} alt="Focalx" />
                        <span>Siria Herbs 2023 © All Rights Reserved | Designed and Developed by </span>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Footer;
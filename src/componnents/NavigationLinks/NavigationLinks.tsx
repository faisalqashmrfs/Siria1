import React from 'react'
import './NavigationLinks.css'
import arrow_navigate from './../../assets/images/arrownavigate.svg'
import { Link } from 'react-router-dom'
import { NavigationLinksProps } from '../../types/types';


const NavigationLinks: React.FC<NavigationLinksProps> = ({
    navigateMain,
    navigateLink,
    navigateSubmain,
    navigateSubmain2
}) => {
    return (
        <div className='NavigationLinks'>
            <span className='Navigate-main'>{navigateMain}</span>
            <img src={arrow_navigate} alt="arrow_navigate" />
            <Link to="" className='Navigate-link'>{navigateLink}</Link>
            <img src={arrow_navigate} alt="arrow_navigate" />

            <span className='Navigate-submain'>{navigateSubmain}</span>
            <img src={arrow_navigate} alt="arrow_navigate" />
            <span className='Navigate-submain'>{navigateSubmain2}</span>

        </div>
    );
};

export default NavigationLinks;
import React, { useEffect, useState } from 'react'
import './ContactSocialMedia.css'
import whatsapp from '../../assets/icons/whatsapp.svg'
import call from '../../assets/icons/call.svg'
import facebook from '../../assets/icons/facebook.svg'
import instagram from '../../assets/icons/insta.svg'
import { ContactSocialProps, TContactSocialMediaData } from '../../types/types';
import { getSocialMediaData } from '../../services/services'


//social media details component


const SocialContact: React.FC<ContactSocialProps> = ({ icon, title, details, Link }) => {

  return (
    <div className='ra-social-contact'>

      <div className='ra-social-div1'>
        <img style={{ width: '30px', height: '30px' }} src={icon} />
        <a href={Link}><h6 style={{ fontSize: '1.5rem', fontWeight: 'var(--bold-weight)' }}>{title}</h6></a>
      </div>
      <div className='ra-social-div2'>
        <p>{details}</p>
      </div>

    </div>
  )

}



const ContactSocialMedia = () => {

  const [contacts, setContacts] = useState<TContactSocialMediaData>();
  useEffect(() => {
    getSocialMediaData().then(data => setContacts(data.data))
  }
    , [])



  return (

    <div className='ra-social-section'>

      <div className="ra-social-contact1">
        <SocialContact icon={whatsapp} title='البريد الإلكتروني' details={contacts?.email} />
        <div className='vertical-line'></div>
        <SocialContact icon={whatsapp} title='رقم الواتساب' details={contacts?.whatsApp_number} />
        <div className='vertical-line'></div>

        <SocialContact icon={call} title='رقم الهاتف' details={contacts?.phone_number} />
      </div>
      <div className="ra-social-line">

      </div>

      <div className="ra-social-contact2">

        <SocialContact icon={facebook} title='صفحتنا على الفيسبوك' Link={contacts?.facebook_link} />
        <div className='vertical-line'></div>
        <SocialContact icon={instagram} title='صفحتنا على الإنستغرام' Link={contacts?.instegram_link} />
      </div>
    </div>
  )
}

export default ContactSocialMedia

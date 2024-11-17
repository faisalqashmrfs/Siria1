import React, { useEffect } from 'react'
import './Contact.css'
import ContactMessages from '../../componnents/ContactMessages/ContactMessages'
import ContactSocialMedia from '../../componnents/ContactSocialMedia/ContactSocialMedia'
import ContactHero from '../../componnents/ContactHero/ContactHero'
import './Contact.css'
import { ColorContext, ColorProvider } from '../../Contexts/ColorContext'
import Navbar from '../../componnents/Navbar/Navbar'


function Contact() {
  const { setBrandColor } = React.useContext(ColorContext);

  useEffect(() => {
    setBrandColor('#283760')
  }, [])

  return (
    <>
      <div className='HJ_contact'>
        <div>
          <ColorProvider>
            <Navbar />
          </ColorProvider>
        </div>
        <ContactHero />
        <ContactSocialMedia />
        <ContactMessages />
      </div>


    </>
  )
}

export default Contact
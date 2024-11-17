import React from 'react';
import './NewsLetterForm.css';
import Icon_facebook from './../../assets/icons/footer/Logo Icons.svg'
import Icon_instagram from './../../assets/icons/footer/Logo Icons2.svg'
import Icon_Mail from './../../assets/icons/footer/Icon_Mail.svg'

const NewsLetterForm: React.FC = () => {
  return (
    <>
      <div className="IB_FormContainer">
        <div className='IB_content'>
          <div className="IB_TextContainer">
            <h2>الطبيعة السورية هي قلب الطبيعة</h2>
            <div className='IB_Subsicripe'>
              <img src={Icon_Mail} alt="Icon_Mail" />
              <span>اشترك معنا وتلقى أحدث أخبارنا ومنتجاتنا</span>
            </div>
          </div>

          <div className="IB_InputContainer">
            <input className="IB_Input" type="email" placeholder="البريد الإلكتروني" />
            <button className="IB_Button">اشتراك</button>
          </div>

          <div className='IB_container_Icons'>
            <img src={Icon_instagram} alt="Icon_instagram" />
            <img src={Icon_facebook} alt="Icon_facebook" />
          </div>

        </div>


      </div>
    </>
  );
};

export default NewsLetterForm;
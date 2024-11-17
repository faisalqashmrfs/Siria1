import React, { useEffect, useState } from 'react';
import './Navbar.css';
import nav_logo from '../../assets/images/home/nav_logo.webp';
import nav_search from '../../assets/images/home/Icon.svg';
import facebook from '../../assets/icons/facebook.svg';
import insta from '../../assets/icons/insta.svg';
import call from '../../assets/icons/call.svg';
import mail from '../../assets/icons/mail.svg';
import w_facebook from '../../assets/icons/w_facebook.svg';
import w_insta from '../../assets/icons/w-insta.svg';
import w_call from '../../assets/icons/w_call.svg';
import w_mail from '../../assets/icons/w-mail.svg';
import logo1 from '../../assets/images/home/Group.svg';
import logo2 from '../../assets/images/home/Group (1).svg';
import logo3 from '../../assets/images/home/Group (2).svg';
import phone from '../../assets/icons/phone.svg';
import cancel from '../../assets/icons/x.svg';
import toggle from '../../assets/icons/toggle.svg';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { ColorContext } from '../../Contexts/ColorContext';

interface NavbarProps {
  className?: string ,
}

type TBrandData = {
  id: number,
  name: string
}

const Navbar: React.FC<NavbarProps>  = ({className}) => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [brandData, setBrandData] = useState<TBrandData[]>([]);


  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/brands-published')
      .then((res) => setBrandData(res.data.data))
      .catch((err) => console.error(err))
  }, []);



  const handleOpenProducts = (item: React.SetStateAction<string>) => {
    setIsOpen((prevState) => !prevState);
    setSelectedItem(item);
  };
  const handleItemClick = (item: React.SetStateAction<string>) => {
    setSelectedItem(item);
  };

  const handleCancelClick = () => {
    setMenuActive(false);
    setSelectedItem('');
  };

  const handleToggleClick = () => {
    setMenuActive((prevState) => !prevState);
  };

  const handeleClickOnBrand = (id: number) => {
    navigate(`/brands/${id}`);
  }

  const { brandColor } = React.useContext(ColorContext);
  const mystyle = {
    backgroundColor: `${brandColor}`
  }

  return (
    <>
      <div className={className}>
        <div style={mystyle} className={`MA_head ${menuActive ? 'hide' : ''}`}>
          <ul>
            <li>
              <span>info@siriaherbs.com</span>
              <img src={mail} alt="mail" />
            </li>
            <li>
              <span>+963 41 2020</span>
              <img src={call} alt="call" />
            </li>
            <li>
              <img src={insta} alt="insta" />
            </li>
            <li>
              <img src={facebook} alt="facebook" />
            </li>
          </ul>
          <div>
            <DropdownButton id="dropdown-basic-button" title="العربية">
              <Dropdown.Item href="#/action-1">العربية</Dropdown.Item>
              <Dropdown.Item href="#/action-2">الانكليزية</Dropdown.Item>
            </DropdownButton>
          </div>
        </div>

        <nav className={`MA_navbar ${menuActive ? 'hide' : ''}`}>
          <button
            className="menu-button"
            onClick={handleToggleClick}
            style={{ backgroundColor: 'inherit' }}
          >
            <img src={toggle} alt="toggle" />
          </button>
          <div className="navbar-logo">
            <img src={nav_logo} alt="nav_search" />
          </div>
          <div className="list" style={{ display: 'flex', flexDirection: 'row' }}>
            <ul className="navbar-items">
              <li className={`navbar-item ${selectedItem === 'home' ? 'active' : ''}`}>
                <Link to='/' onClick={() => handleItemClick('home')}>
                  الرئيسية
                </Link>
              </li>
              <li className={`navbar-item ${selectedItem === 'products' ? 'active' : ''}`}>
                <a onClick={() => handleItemClick('products')}>
                  <DropdownButton id="dropdown-basic-button" title="منتجاتنا ">
                    {brandData.map((item) => {
                      return (
                        <Dropdown.Item key={item.id} onClick={() => handeleClickOnBrand(item.id)}>{item.name}</Dropdown.Item>

                      )
                    })}
                  </DropdownButton>
                </a>
              </li>
              <li className={`navbar-item ${selectedItem === 'about' ? 'active' : ''}`}>
                <Link to='/about' onClick={() => handleItemClick('about')} >
                  من نحن
                </Link>
              </li>
              <li className={`navbar-item ${selectedItem === 'contact' ? 'active' : ''}`}>
                <Link to='/contact' onClick={() => handleItemClick('contact')}>
                  تواصل معنا
                </Link>
              </li>
            </ul>
            <div className="search-logo">
              <img src={nav_search} alt="nav_search" />
            </div>
          </div>

        </nav>

      </div>


      <div className={`ShowPage ${menuActive ? '' : 'hide'}`}></div>
      <div className={`mobile_nav ${menuActive ? 'active' : ''}`}>

        <div>
          <div className='MA_Icon_cancel'>
            <img
              src={cancel}
              alt="cancel"
              style={{ padding: '15px 15px' }}
              onClick={handleCancelClick}
            />

          </div>


          <div className="nav-image">
            <img src={logo1} alt="logo" />
            <img src={logo2} alt="logo" />
            <img src={logo3} alt="logo" />
          </div>

          <ul className="mobile_nav_items">
            <li className={`mobile_nav_item  text_align ${selectedItem === 'home' ? 'active' : ''}`}>
              <Link to='/' onClick={() => handleItemClick('home')}>
                الرئيسية
              </Link>
            </li>

            <li >
              <div className='MA_dropdown_Products'>
                <button onClick={() => handleOpenProducts('greengold')} className='MA_productsStyle'>المنتجات</button>
                {isOpen && (
                  <ul>
                    {brandData.map((item) => {
                      return (
                        <li key={item.id} onClick={() => handeleClickOnBrand(item.id)}>
                          {item.name}
                        </li>

                      )
                    })}
                  </ul>
                )}
              </div>
            </li>
            <li className={`mobile_nav_item text_align ${selectedItem === 'about' ? 'active' : ''}`}>
              <Link to='/about' onClick={() => handleItemClick('about')}>
                من نحن
              </Link>
            </li>
            <li className={`mobile_nav_item text_align  ${selectedItem === 'contact' ? 'active' : ''}`}>
              <Link to='/contact' onClick={() => handleItemClick('contact')} >
                تواصل معنا
              </Link>
            </li>
          </ul>
        </div>
        <div className="mobile_nav_contact">
          <ul>
            <li style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
              <img src={w_facebook} alt="w_facebook" /><img src={w_insta} alt="w_insta" />
            </li>
            <li><img src={w_call} alt="w_call" />+963 41 2020</li>
            <li><img src={phone} alt="phone" />+963 994 640000</li>
            <li><img src={w_mail} alt="w_mail" />info@siriaherbs.com</li>
          </ul>
        </div>
      </div>


    </>
  );
};

export default Navbar;
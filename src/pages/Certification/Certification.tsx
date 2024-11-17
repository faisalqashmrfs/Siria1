import './Certification.css'
import iso_logo from "../../assets/images/Certification/isologo.svg";
import iso_img from "../../assets/images/Certification/box-two-image.png";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ColorContext, ColorProvider } from '../../Contexts/ColorContext';
import Navbar from '../../componnents/Navbar/Navbar';


interface Certification {
  id?: number;
  name: string;
  subname: string;
  description: string;
  icon: string;
  photo: string;
}
const Certification = () => {
  const [Certifications, setCertifications] = useState<Certification[]>([]);
  const { setBrandColor } = React.useContext(ColorContext);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/certifications")
      .then((response) => {
        setCertifications(response.data.data.data);
        console.log(response.data.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setBrandColor('#283760')
  }, []);
  return (
    <div className="ne-iso">
      <div>
        <ColorProvider>
          <Navbar />
        </ColorProvider>
      </div>
      <div className="ne-iso-hero">
        <div className="overlay"></div>
        <div className="ne-hero-content">
          <img src={iso_logo} alt="" />
          <h1 className="ne-hero-head-1">الشركة السورية للمنتجات الطبيعية</h1>
          <h1 className="ne-hero-head-2">
            تحصل على شهادة ISO 9001-2015 في نظام إدارة الجودة
          </h1>
        </div>
      </div>
      <div className="ne-iso-paragraph">
        <p className="ne-iso-paragraph-1">
          اهتم معيار ISO 9001 بالعوامل المهمة المتعلقة بتعزيز مبدأ القيادة
          وإدارة المخاطر واستمرارية الأعمال. وهذا يسمح للمؤسسات بمواءمة توجهاتها
          الاستراتيجية مع نظام الإدارة المطبق من أجل تحسين الأداء وتحقيق متطلبات
          العملاء بشكل دائم.
        </p>
        <p className="ne-iso-paragraph-2">
          تتضمن شهادة ISO لتصنيع وبيع المنتجات العشبية الطبية الطبيعية ومنتجات
          العسل عدة نقاط
        </p>
      </div>
      <div className="ne-iso-box-container">
        <div className="ne-box-con-1">
          <div className="iso-box">
            <h1 className="ne-iso-box-head">مستويات السلامة</h1>
            <p className="ne-iso-box-text">
              تحسين الصحة والعافية تسعى الشركة إلى تعزيز الصحة والعافية من خلال
              منتجاتها. تعمل على تطوير منتجات طبيعية عالية الجودة وآمنة تساعد
              على تحسين صحة ورفاهية المستهلكين.
            </p>
          </div>
          <div className="iso-box">
            <h1 className="ne-iso-box-head"> الشفافية والمساءلة</h1>
            <p className="ne-iso-box-text">
              تلتزم الشركة بمبدأ الشفافية وتقديم معلومات كاملة وصحيحة عن
              المنتجات ومصادرها وممارساتها. تعمل على توفير منتجات ذات تأثير صحي
              مع توفير أعلى
            </p>
          </div>
        </div>
        <div className="ne-box-con-2">
          <div className="iso-box-med">
            <h1 className="ne-iso-box-head"> الاستدامة</h1>
            <p className="ne-iso-box-text">
              تتضمن الشركة ممارسات الاستدامة في تصنيع وتسويق المنتجات. تعمل على
              الحفاظ على التوازن البيئي والاجتماعي والاقتصادي في عملياتها وتسعى
              إلى توفير منتجات طبيعية صحية دون التأثير سلبا على البيئة.
            </p>
          </div>
          <div className="ne-iso-box-img">
            <img src={iso_img} alt="" />
          </div>
          <div className="iso-box-med">
            <h1 className="ne-iso-box-head"> الجودة والسلامة</h1>
            <p className="ne-iso-box-text">
              تتضع الشركة سياسة لتحقيق الجودة والسلامة في تصنيع جميع المنتجات.
              تعمل على استخدام مكونات طبيعية ذات جودة عالية وتطبق إجراءات صارمة
              لمراقبة الجودة في جميع مراحل التصنيع والتوزيع
            </p>
          </div>
        </div>
        <div className="ne-box-con-3">
          <div className="iso-box-last">
            <h1 className="ne-iso-box-head"> الامتثال للمعايير</h1>
            <p className="ne-iso-box-text">
              تعمل الشركة وفقا لمعايير الجودة المعترف بها دوليا مثل معيار إدارة
              الجودة ISO 9001 ومعيار إدارة سلامة الأغذية ISO 22000. تهدف إلى جعل
              منتجاتها متفوقة على معايير الصحة والجودة المطلوبة
            </p>
          </div>
        </div>
      </div>

      <div className="ne-iso-certification">
        {Certifications.map((Certification, index) => (
          <div className="ne-certification-container" key={Certification.id}>
            <div className={`ne-certification-content-${index + 1}`}>
              <div className={`ne-certification-logo-${index + 1}`}>
                <img src={Certification.icon} alt="" />
                <div className="ne-img-content">
                  <h1>{Certification.name}</h1>
                  <p>{Certification.subname}</p>
                </div>
              </div>
              <div className="ne-certification-text">
                <p>{
                  Certification.description}
                </p>
              </div>
            </div>
            <div className="ne-certification-img">
              <img src={Certification.photo} alt="" />
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Certification
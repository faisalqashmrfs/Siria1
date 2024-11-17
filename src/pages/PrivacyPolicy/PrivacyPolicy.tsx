import React, { useEffect, useState } from "react";
import "./PrivacyPolicy.css";
import axios from "axios";

interface Policy {
  id?: number;
  policy_number: string;
  title: string;
  description: string;
  icon: string;
}

const PrivacyPolicy = () => {
  const [policies, setPolicies] = useState<Policy[]>([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/policy")
      .then((response) => {
        setPolicies(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

      {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< static arry for tisting Demo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></>*/}
// const StaticEvaluations : Policy[] =  [
//   {
//     id: 1,
//     policy_number: '01',
//     title: 'string',
//     description: 'string',
//     icon: 'string',
//   },
// ] 
{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< static arry for tisting Demo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></>*/}

console.log();

  return (
    <div className="HJ_MarginSection" id="policies">
      <div className="ne-privacy-policy">
        <div className="privacy-container">
          <div className="ne-privacy-title">
            <h1 className="ne-head-title">سياسة الشركة</h1>
          </div>
          <div className="ne-privacy-layout">

            {policies.length == 3 && (
              <>
                <div className="ne-image-layout"></div>
                {policies.slice(0, 1).map((policy) => (
                  <div key={policy.id} className="ne-layout-box-1">
                    <div className="ne-box-image">
                      <img className="ne-policy-img" src={policy.icon} alt="policy" />
                      <p className="ne-policy-number">{policy.policy_number}</p>
                    </div>
                    <div className="ne-box-contents">
                      <h1 className="ne-policy-title">{policy.title}</h1>
                      <p className="ne-policy-description">{policy.description}</p>
                    </div>
                  </div>
                ))}
                <div className="ne-layout-box-two">
                  {policies.slice(1, 3).map((policy, index) => (
                    <div key={policy.id} className={`ne-layout-box-${index + 2}`}>
                      <div className="ne-box-image">
                        <img className="ne-policy-img" src={policy.icon} alt="" />
                        <p className="ne-policy-number">{policy.policy_number}</p>
                      </div>
                      <div className="ne-box-contents">
                        <h1 className="ne-policy-title">{policy.title}</h1>
                        <p className={`ne-policy-description-${index + 2}`}>{policy.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* ============================================================== */}
            {policies.length == 2 && (
              <>
                <div className="ne-image-layout-2"></div>
                {policies.slice(0, 1).map((policy) => (
                  <div key={policy.id} className="ne-layout-box-1">
                    <div className="ne-box-image">
                      <img className="ne-policy-img" src={policy.icon} alt="policy" />
                      <p className="ne-policy-number">{policy.policy_number}</p>
                    </div>
                    <div className="ne-box-contents">
                      <h1 className="ne-policy-title">{policy.title}</h1>
                      <p className="ne-policy-description">{policy.description}</p>
                    </div>
                  </div>
                ))}
                <div className="ne-layout-box-two">
                  {policies.slice(1, 3).map((policy, index) => (
                    <div key={policy.id} className={`ne-layout-box-${index + 2}`}>
                      <div className="ne-box-image">
                        <img className="ne-policy-img" src={policy.icon} alt="" />
                        <p className="ne-policy-number">{policy.policy_number}</p>
                      </div>
                      <div className="ne-box-contents">
                        <h1 className="ne-policy-title">{policy.title}</h1>
                        <p className={`ne-policy-description-${index + 2}`}>{policy.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* ============================================================= */}
            {policies.length === 1 && (
              <>
                <div className="ne-image-layout-1"></div>
                {policies.map((policy, index) => (
                  <div key={policy.id} className={`ne-layout-box-1-${index + 1}`}>
                    <div className="ne-box-image">
                      <img className="ne-policy-img" src={policy.icon} alt="policy" />
                      <p className="ne-policy-number">{policy.policy_number}</p>
                    </div>
                    <div className="ne-box-contents">
                      <h1 className="ne-policy-title">{policy.title}</h1>
                      <p className={`ne-policy-description-${index + 1}`}>{policy.description}</p>
                    </div>
                  </div>
                ))}
              </>
            )}

            {/* ======================================================== */}

            {policies.length >= 4 && (
              <div className="ne-multyboxes" >
                {
                  policies.map((policy) => (
                    <div key={policy.id} className="ne-multy-box">
                      <div className="ne-box-image">
                        <img className="ne-policy-img" src={policy.icon} alt="policy" />
                        <p className="ne-policy-number">{policy.policy_number}</p>
                      </div>
                      <div className="ne-box-contents">
                        <h1 className="ne-policy-title">{policy.title}</h1>
                        <p className="ne-policy-description-4">{policy.description}</p>
                      </div>
                    </div>
                  ))
                }
              </div>
            )}

          </div>
        </div>
      </div>

    </div>

  );
};

export default PrivacyPolicy;

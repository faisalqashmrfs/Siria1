import React from 'react';
// import { useEffect, useState } from 'react';
import './Evaluations.css';
import value from '../../assets/images/home/value.webp';
import EvaluationItem from '../EvaluationItem/EvaluationItem';
import TitleSection from '../TitleSection/TitleSection';
import EvaIcon1 from '../../Static/EvaIcon1.svg';
import EvaIcon2 from '../../Static/EvaIcon2.svg';
import EvaIcon3 from '../../Static/EvaIcon3.svg';

interface Evaluations {
    id: number;
    icon: string;
    title: string;
    description: string;
}

const Evaluations: React.FC = () => {
    // const [evaluations, setEvaluations] = useState<Evaluations[]>([]);

    // useEffect(() => {
    //     fetch('http://127.0.0.1:8000/api/evaluations')
    //         .then(response => response.json())
    //         .then(data => setEvaluations(data.data))
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []);

    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< static arry for tisting Demo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></>*/}
const StaticEvaluations  : {id : number , description : string , icon : string , title:string }[] =  [
  {
    id: 1,
    description:"العمل بروح الفريق ومشاركة المزارع تفاصيل العمل لضمان الاستدامة في الزراعة التعاقدية.",
    icon : EvaIcon1 ,
    title : "التعاون" 
  },
  {
    id: 2,
    description:"اكتساب الاحترام من خلال التزامنا بالعدالة والثقة والنزاهة في جميع علاقاتنا.",
    icon : EvaIcon2 ,
    title : "التقدير" 
  },
  {
    id: 3,
    description:"الفخر بعملنا والسعي لتحقيق نتائج مذهلة.",
    icon : EvaIcon3 ,
    title : "الإخلاص" 
  },
  {
    id: 4,
    description:"الفخر بعملنا والسعي لتحقيق نتائج مذهلة.",
    icon : EvaIcon3 ,
    title : "الإخلاص" 
  },
  {
    id: 5,
    description:"الفخر بعملنا والسعي لتحقيق نتائج مذهلة.",
    icon : EvaIcon3 ,
    title : "الإخلاص" 
  },
  {
    id: 6,
    description:"الفخر بعملنا والسعي لتحقيق نتائج مذهلة.",
    icon : EvaIcon3 ,
    title : "الإخلاص" 
  },
  {
    id: 7,
    description:"الفخر بعملنا والسعي لتحقيق نتائج مذهلة.",
    icon : EvaIcon3 ,
    title : "الإخلاص" 
  },
] 
{/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< static arry for tisting Demo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></>*/}

    return (
        <div className='AB_ContainerEvaluations'>

            <TitleSection title_section=" قيمنا" className='HJ_DirectionLeft' />

            <div className="AB_Evaluations-Section">
                <div className="AB_tree-image">
                    <img src={value} alt="Tree" />
                </div>
                <div className="AB_AllEvalutions">
                  
                  {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< static arry for tisting Demo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></>*/}

                    {/* {evaluations.map((evaluation, index) => (
                        <EvaluationItem
                            key={evaluation.id}
                            icon={evaluation.icon}
                            title={evaluation.title}
                            description={evaluation.description}
                            className={index % 2 !== 0 ? ' AB_left' : ''}
                        />
                    ))} */}

                    {StaticEvaluations.map((evaluation, index) => (
                        <EvaluationItem
                            key={evaluation.id}
                            icon={evaluation.icon}
                            title={evaluation.title}
                            description={evaluation.description}
                            className={index % 2 !== 0 ? ' AB_left' : ''}
                        />
                    ))}
                    
                    {/* <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<< static arry for tisting Demo >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>></>*/}

                </div>
            </div>

        </div>

    );
};

export default Evaluations;

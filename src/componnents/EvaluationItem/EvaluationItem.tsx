import React from 'react';
import './EvaluationItem.css';

interface EvaluationItemProps {
    icon: string;
    title: string;
    description: string;
    className?: string;
}

const EvaluationItem: React.FC<EvaluationItemProps> = ({ icon, title, description, className }) => {
    return (
        <div  className={`${className ? `${className} AB_Evalution_item` : 'AB_Evalution_item'}`}>
            <img src={icon} alt={title} /> 
            <div className='AB_contentEvalution'>
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default EvaluationItem;

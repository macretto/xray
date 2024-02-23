import React from 'react';
import ExamItem from "./ExamItem";

const ExamsList = ({items}) => {
  
    return (
        <ul>
          {items.map(item => (
            <ExamItem key={item._id} item={item} />
          ))}
        </ul>
      );
          }
          
export default ExamsList;

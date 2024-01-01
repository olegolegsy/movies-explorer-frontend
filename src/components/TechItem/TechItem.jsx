import React from 'react';
import './TechItem.css';

function TechItem({ name }) {
  return <li className='tech-item'>{name}</li>;
}

export default TechItem;

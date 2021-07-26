import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';
import "./styles.css";
import { Link } from 'react-router-dom';

const Feature = () => {
  return (
    <FeatureContainer>
      <h1>Our BEST Coffee</h1>
      <p>Arabica has a sour taste mixed with mild bitterness, light brown water color, clear amber. The scent of Arabica is very elegant and noble, Arabica has the smell of syrup, the smell of fruit, mixed with the smell of honey, and the smell of toast, the smell of the straw field at noon in summer...</p>
      <Link to="/Payment">
        <a className='featureA' /*href='../../../order.html' target='_blank'*/>Purchase</a>
        </Link>
    </FeatureContainer>
  );
};

export default Feature;

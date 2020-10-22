import React from 'react';
import Options from './Options';
import './Features.css';
import Store from '../Store';

export default function Features(props) {
      const options = Store[props.feature].map((item, index) => {
      return (
        <Options
          key={index}
          item={item}
          selected={props.selected}
          updateFeature ={props.updateFeature }
          feature={props.feature}
        />
      );
    });
  
    return (
      <fieldset className="feature" key={props.featureHash}>
        <legend className="feature__name">
          <h3>{props.feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
  }
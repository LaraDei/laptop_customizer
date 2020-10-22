import React from 'react';
import Features from  './Features' ;
import './Customize.css';
import Store from '../Store';

export default function Customize(props) {
    const features = Object.keys(Store).map((feature, idx) => {
        
        return (
          <Features
            key={idx}
            features={props.features}
            feature={feature}
            updateFeature ={props.updateFeature }
            selected={props.selected}
          />
        );
      });
      return (
        <form className="main__form">
          <h2>Customize your laptop</h2>
          {features}
        </form>
      );
    
}
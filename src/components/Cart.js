import React from 'react';
import Summary from './Summary';
import Total from './Total';
import './Cart.css';


export default function Cart(props) {
  const cart = Object.keys(props.selected).map((feature, idx) => {
    return (
      <Summary
        key={idx}
        feature={feature}
        idx={idx}
        selected={props.selected}
      />
    )
  });
  return (
    <section className="main__summary">
      <h2>Your cart</h2>
      {cart}
      <Total 
        total={props.total}
      />
    </section>)
}

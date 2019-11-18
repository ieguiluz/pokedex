import React from 'react';
import Header from './Header';

const Template = (props) => {
  return (
    <div className="pokedex__template">
      <Header />
      {props.children}
    </div>
  );
}

export default Template;
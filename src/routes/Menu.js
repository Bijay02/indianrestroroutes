import React from 'react';
import './rstyles.css';
import MenuList from '../MenuList';
import MenuItem from './MenuItem';

const Menu = () => {
  
  return (

    <div>
      <div className='menu-title'> Our Menu</div>
      <div className='menu-container'>

        {/* {MenuList.map((fname) => <li>{fname.name}</li>)} */}
        {MenuList.map((fname) => <MenuItem image={fname.image} name={fname.name} price={fname.price}/>)}

      </div>
  </div>
  )
}

export default Menu;
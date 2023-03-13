import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
   return (
      <div className='mt-10 font-semibold '>
         <h1>This is SIdebar</h1>
         <Link to='/about'><h2 className='my-2'>About</h2></Link>
         <Link to='contact'> <h2>Contact</h2></Link>
      </div>
   );
};

export default SideBar;
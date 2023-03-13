import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
   return (
      <div className="navbar bg-gray-300" >
         <div className="flex-1">
            <p className="btn btn-ghost normal-case text-xl">Dream</p>
         </div>
         <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
               <li><Link to="/">Home</Link></li>
               <li><Link to="/contact">Contact</Link></li>

               <li><Link to="/about">About</Link></li>
            </ul>
         </div>
      </div>
   );
};

export default Header;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';

const Main = () => {
   return (
      <div>
         <Header></Header>
         <div className='grid lg:grid-cols-7 md:grid-cols-4 '>
            <div className='lg:col-span-1 md:col-span-1 bg-gray-300'>
               <SideBar></SideBar>
            </div>
            <div className='lg:col-span-6  md:col-span-3  '>
               <Outlet></Outlet>
            </div>
         </div>
         <Footer></Footer>
      </div>
   );
};

export default Main; 
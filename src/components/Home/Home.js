import React from 'react';


const Home = () => {
   return (
      <div className="hero min-h-screen"
         style={{ backgroundImage: `url("https://cdn.pixabay.com/photo/2013/03/02/02/41/alley-89197__340.jpg")` }}>

         <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
               <h1 className="mb-5 text-5xl font-bold">Hello there!</h1>
               <p className="mb-5 text-2xl">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat eum sunt magnam corrupti aspernatur quidem unde animi ratione, mollitia officiis dolorum porro consequuntur officia enim eius. Esse neque iure nemo.
               </p>

            </div>
         </div>
      </div>
   );
};

export default Home;
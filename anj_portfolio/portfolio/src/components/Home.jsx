

// import React, { useEffect, useState } from 'react';
// import './home.css';
// import backgroundImage from '../images/homebackgroundimage.jpg';

// const Home = () => {
//   const [isNavActive, setIsNavActive] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > nav.offsetHeight + 150) {
//         setIsNavActive(true);
//       } else {
//         setIsNavActive(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);

//     // Cleanup the event listener when the component is unmounted
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []); // Empty dependency array ensures that the effect runs once after the initial render

//   return (
//     <div>
//       {/* Your navigation bar with dynamic class based on scroll position */}
//       <nav className={`nav ${isNavActive ? 'active' : ''}`}>
//         <div className="container">
//           <h1 className="logo"><a href="#">My website</a></h1>
//           <ul>
//             <li><a href="# current">Home</a></li>
//             <li><a href="#">About</a></li>
//             <li><a href="#">Services</a></li>
//             <li><a href="#">Contact</a></li>
//           </ul>
//         </div>
//       </nav>

//       {/* Your other components go here */}
//       <div className="hero" >
//       {/* style={{ backgroundImage: `url(${backgroundImage})`}} */}
//         <div className="container">
//           <h1 style={{color:"black"}}>Welcome to our website</h1>
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, repudiandae.</p>
//         </div>
//       </div>

//       <section className="container content">
//         <h2>content 1</h2>
//         <p>
//       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, animi
//       sunt! Libero optio, asperiores quis ipsa eum eveniet labore nihil expedita
//       nostrum laborum dicta at deleniti sapiente atque assumenda quo corrupti
//       exercitationem animi minus nemo vero soluta alias perspiciatis!
//       Aspernatur, laborum consectetur repellat repellendus aliquam sed.
//       Cupiditate accusantium porro at quae, maxime itaque accusamus! Ipsam
//       tempore, illo similique officia neque asperiores eveniet omnis rem
//       veritatis cumque quos amet placeat dignissimos quisquam nesciunt quas.
//       Adipisci perspiciatis veniam, voluptatibus dolores doloremque quisquam qui
//       possimus, vero ab dolorum temporibus soluta libero similique assumenda
//       debitis dolorem ut perferendis incidunt nobis facere eaque. Enim, nemo?
//     </p>
//     <h3>content 2</h3>
//     <p>
//       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque, animi
//       sunt! Libero optio, asperiores quis ipsa eum eveniet labore nihil expedita
//       nostrum laborum dicta at deleniti sapiente atque assumenda quo corrupti
//       exercitationem animi minus nemo vero soluta alias perspiciatis!
//       Aspernatur, laborum consectetur repellat repellendus aliquam sed.
//       Cupiditate accusantium porro at quae, maxime itaque accusamus! Ipsam
//       tempore, illo similique officia neque asperiores eveniet omnis rem
//       veritatis cumque quos amet placeat dignissimos quisquam nesciunt quas.
//       Adipisci perspiciatis veniam, voluptatibus dolores doloremque quisquam qui
//       possimus, vero ab dolorum temporibus soluta libero similique assumenda
//       debitis dolorem ut perferendis incidunt nobis facere eaque. Enim, nemo?
//     </p>
//       </section>
//     </div>
//   );
// };

// export default Home;

import React from "react";

const Home =()=>{

}
export default Home;
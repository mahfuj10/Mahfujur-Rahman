import React from 'react';
import '../Style/Style.css';


const Nav = () => {

     const navStyle = {
          // height: '60px',
          // backgroundColor: '#F4F4F4'
     }

     return (

          <nav style={navStyle} className="d-flex justify-content-around pt-3">

               <article>
                    <h4>MAHFUJ</h4>
               </article>

               <article className="nav-item">
                    <a href="#home">HOME</a>
                    <a href="#home">ABOUT</a>
                    <a href="#home">PROJECTS</a>
                    <a href="#home">CONTACT</a>
               </article>
          </nav>


     );
};

export default Nav;
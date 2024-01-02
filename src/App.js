import { Footer } from './components/Footer';
import { SubContent } from './components/SubContent';
import { MainContent } from './components/MainContent';
import './App.css';
import loopstudios from './images/logo.svg';
import mobilemenu from './images/icon-hamburger.svg';
import mobilearticle from './images/mobile/image-interactive.jpg';
import desktoparticle from './images/desktop/image-interactive.jpg';
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import instagram from './images/icon-instagram.svg';
import pinterest from './images/icon-pinterest.svg';
import { useState } from 'react';
import Hero from './components/Hero';

function App() {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  
  function setBodyScroll(openMobileMenu){
    if(openMobileMenu)
      document.body.style.overflow = "visible";
    else
      document.body.style.overflow = "hidden";

  }

  return (
    <div className='App'>

      <div className='wrapper'>

        <Hero loopstudios={loopstudios} setOpenMobileMenu={setOpenMobileMenu} openMobileMenu={openMobileMenu} setBodyScroll={setBodyScroll}  />
        <MainContent mobilearticle={mobilearticle} desktoparticle={desktoparticle}  />
        <SubContent     />
        <Footer loopstudios={loopstudios} facebook={facebook} twitter={twitter} pinterest={pinterest} instagram={instagram}  />
      </div>

    </div>
  );
}

export default App;

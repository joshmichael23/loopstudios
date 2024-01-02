import React from "react";

export function MainContent(props){
  return (
        <section className='main-content'>
          <img className='mobile' src={props.mobilearticle} alt="VR man" />
          <img className='desktop' src={props.desktoparticle} alt="VR man"></img>
          <h1>THE LEADER IN INTERACTIVE VR</h1>
          <p>Founded in 2011, Loopstudios has been producing world-class virtual reality projects for some of the best companies around the globe. Our award-winning creations have transformed businesses through digital experiences that bind to their brand.</p>
        </section>
    );
}


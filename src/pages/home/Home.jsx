import React, { useEffect } from 'react';
import './home.css'

export default function Home() {
  return (
    <>
      <div className="home">
        <div className="content">
          <div className="heading-container">
            <h1 id="swan">We are SWAN.</h1>
            <h1 id="work"> We work with children, young people and families.</h1>
            <h1 id="impact"> Together we can have a bigger impact.</h1>
          </div>
        </div>
        <img id="banner-image" src="../../images/content/park1.jpg" />
      </div>
    </>
  );
}

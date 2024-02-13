import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './home.css'
import Logo from '../../components/logo/Logo'

export default function Home() {
  useEffect(() => {
    //Get the height of the header element
    const headerHeight = document.getElementById('header').offsetHeight;
    document.documentElement.style.setProperty('--headerHeight', headerHeight + 'px');
  }, []);

  return (
    <>
      <div className="home">
        <div className="homeBanner">
          <img id="banner-image" src="../../images/content/park1.jpg"/>
          <div class="heading-container">
            <h1 id="swan">We are SWAN.</h1>
            <h1 id="work"> We work with children, young people and families.</h1>
            <h1 id="impact"> Together we can have a bigger impact.</h1>
          </div>
          <div class="learn-more">
          <Link className="link" to="/about">
              Learn more about us...
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

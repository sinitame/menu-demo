import React, {useEffect, useState} from "react";
import {Navigation} from "./navigation/Navigation";
import {Header} from "./header/Header";
import {Gallery} from "./gallery/Gallery";
import {Contact} from "./contact/Contact";
import JsonData from '../../data/landing.json'
import SmoothScroll from 'smooth-scroll'

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
})

const Home = () => {
  const [landingPageData, setLandingPageData] = useState({})
  useEffect(() => {
    setLandingPageData(JsonData)
  }, [])

  return (
      <div className="home">
        <Navigation/>
        <Header data={landingPageData.Header}/>
        <Gallery data={JsonData.Clients}/>
        <Contact data={landingPageData.Contact}/>
      </div>
  );
}

export default Home;

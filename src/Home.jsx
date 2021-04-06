import React, {useEffect, useState} from "react";
import {Navigation} from "./components/Navigation";
import {Header} from "./components/Header";
import {Gallery} from "./components/Gallery";
import {Contact} from "./components/Contact";
import JsonData from './data/landing.json'
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
        <Gallery/>
        <Contact data={landingPageData.Contact}/>
      </div>
  );
}

export default Home;

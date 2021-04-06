import TypeWriterEffect from 'react-typewriter-effect';
import React from "react";

export const Header = (props) => {
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-8 col-md-offset-2 intro-text'>
                <h1>
                  <TypeWriterEffect
                      textStyle={{ fontFamily: 'Red Hat Display' }}
                      startDelay={100}
                      cursorColor="black"
                      text={props.data ? props.data.title : 'Loading'}
                      typeSpeed={100}
                  />

                  <span></span>
                </h1>
                <p></p>
                <a
                  href='https://www.datawi.fr'
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Learn More
                </a>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

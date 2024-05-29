// JavaScript code to create and inject the HTML content
import React from 'react';
import pic1 from '../src/imgs/6.png'
import pic2 from '../src/imgs/5.png'

const Divider = () => {
  return (
    <hr
      style={{ borderTop: "2px solid black", width: 400, }}
    ></hr>
  );
};

const About = () => (
  <section className="u-clearfix u-section-1" id="sec-3101">
    <div className="u-clearfix u-sheet u-valign-middle-sm u-valign-middle-xs u-sheet-1">
      <h1 className="u-custom-font u-text u-text-default u-text-1">About Us</h1>
      <div className="u-border-2 u-border-custom-color-1 u-expanded-width u-line u-line-horizontal u-line-1">
              <p1 className='text'>Welcome to Hoopfull, your ultimate companion for organizing and managing basketball tournaments effortlessly. 
                Designed with both players and organizers in mind, our intuitive platform streamlines the entire tournament process, from registration to scheduling and beyond. 
                Whether you are a seasoned team captain or a first-time player, our app offers a comprehensive suite of tools to create, promote, and oversee basketball tournaments of any scale. 
                With features such as easy team registration, real-time match and bracket updates, and a map to help you find your way, 
                Hoopfull ensures that every aspect of your tournament experience is smooth and hassle-free.
                </p1>
                <Divider />
                <div className='img'>
                <img src={pic2} width={350} height={325} alt='basketball' />
                </div>
                <div className='img'>
                <img src={pic1} width={350} height={450} alt='basketball' />
      </div>
            </div>

            <div className="u-container-style u-image u-layout-cell u-size-22 u-image-1" data-image-width="1280" data-image-height="854">
              <div className="u-container-layout u-container-layout-2"></div>
            </div>
      </div>
        </section>


);

export default About;

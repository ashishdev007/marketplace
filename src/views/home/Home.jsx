import React from 'react';
import '../../style/Home.css';
import Carousel from 'react-elastic-carousel';

import image1 from '../../assets/products/drills/1.jpg';
import image2 from '../../assets/products/drills/2.jpg';
import image3 from '../../assets/products/drills/4.jpg';
import { Link } from 'react-router-dom';

// import man from '../../assets/man.png';
const slideImages = [image1, image2, image3, image2, image3];

const breakPoints = [
  { width: 1, itemsToShow: 2 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

const Home = () => {
  return (
    // <div style={{ margin: 'auto', width: '80%', paddingTop: '2.5%' }}>Home</div>
    <div className="home-container">
      <div className="products">
        <h3 className="ui header">Products Near You</h3>
        <Carousel breakPoints={breakPoints}>
          {slideImages.map((item, key) => {
            return (
              <Link key={key} to="/product/22">
                <div class="ui card">
                  <div class="image">
                    <img src={item} alt="" className="product-image" />
                  </div>
                  <div class="content">
                    <a class="header">Awesome Product {key + 1}</a>
                  </div>
                </div>
              </Link>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default Home;

import React from 'react';
import { useParams } from 'react-router-dom';
import '../../style/Product.css';
import 'react-slideshow-image/dist/styles.css';
import { Slide } from 'react-slideshow-image';
import Carousel from 'react-elastic-carousel';

import image1 from '../../assets/products/drills/1.jpg';
import image2 from '../../assets/products/drills/2.jpg';
import image3 from '../../assets/products/drills/4.jpg';

import man from '../../assets/man.png';
const slideImages = [image1, image2, image3];

const Product = () => {
  let { id } = useParams();

  return (
    <div style={{ padding: '0 5% 5%' }}>
      <div className="product-info">
        <div style={{ gridColumn: '1' }}>
          <Carousel>
            {slideImages.map((item, key) => {
              return (
                <div key={key}>
                  <img src={item} alt="" className="product-image" />
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="details">
          <div className="bold" style={{ fontSize: '1.5em' }}>
            BLACK+DECKER 20V Max Cordless Drill / Driver with 30-Piece
            Accessories (LD120VA)
          </div>
          <div>
            Seller: <a href="">Bob Morrison</a>
          </div>
          <div className="price">
            <span className="green-text">$55.50</span> <span>per day</span>
          </div>

          <div className="ui star rating" data-rating="3"></div>
          <div className="ui green button">Add to Cart</div>
          <div>
            <div className="bold">About This Item:</div>
            <ul>
              <li>
                Cordless drill with Lithium Ion Battery that is always ready and
                holds a charge up to 18 months
              </li>
              <li>
                The 24 position clutch of this power drill prevents stripping
                and overdriving screws by providing extra level of control
              </li>
              <li>
                Drill/driver with soft grip handle provides added comfort during
                use
              </li>
              <li>Assortment of 30 accessories to help you get the job done</li>
              <li>
                Part of the 20V max System - A System that demands attention
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="users-area">
        <div className="questions" style={{ gridColumn: '1' }}>
          {/* <h1 className="ui header">Questions</h1> */}

          <div class="ui small comments">
            <h3 class="ui dividing header">Questions</h3>

            <div class="comment">
              <a class="avatar">
                <img src={man} />
              </a>
              <div class="content">
                <a class="author">Matt</a>
                <div class="metadata">
                  <span class="date">Today at 5:42PM</span>
                </div>
                <div class="text">How artistic!</div>
                <div class="actions">
                  <a class="reply">Reply</a>
                </div>
              </div>
            </div>
            <div class="comment">
              <a class="avatar">
                <img src={man} />
              </a>
              <div class="content">
                <a class="author">Elliot Fu</a>
                <div class="metadata">
                  <span class="date">Yesterday at 12:30AM</span>
                </div>
                <div class="text">
                  <p>
                    This has been very useful for my research. Thanks as well!
                  </p>
                </div>
                <div class="actions">
                  <a class="reply">Reply</a>
                </div>
              </div>
              <div class="comments">
                <div class="comment">
                  <a class="avatar">
                    <img src={man} />
                  </a>
                  <div class="content">
                    <a class="author">Jenny Hess</a>
                    <div class="metadata">
                      <span class="date">Just now</span>
                    </div>
                    <div class="text">Elliot you are always so right :)</div>
                    <div class="actions">
                      <a class="reply">Reply</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="comment">
              <a class="avatar">
                <img src={man} />
              </a>
              <div class="content">
                <a class="author">Joe Henderson</a>
                <div class="metadata">
                  <span class="date">5 days ago</span>
                </div>
                <div class="text">Dude, this is awesome. Thanks so much</div>
                <div class="actions">
                  <a class="reply">Reply</a>
                </div>
              </div>
            </div>
            <form class="ui reply form">
              <div class="field">
                <input type="text" className="ui input" />
              </div>
              <div class="ui green labeled submit icon button">
                <i class="icon edit"></i> Ask Question
              </div>
            </form>
          </div>
        </div>

        <div className="reviews" style={{ gridColumn: '2' }}>
          <div class="ui comments">
            <h3 class="ui dividing header">Comments</h3>
            <div class="comment">
              <a class="avatar">
                <img src={man} />
              </a>
              <div class="content">
                <a class="author">Matt</a>
                <div class="metadata">
                  <span class="date">Today at 5:42PM</span>
                </div>
                <div class="text">How artistic!</div>
                <div class="actions">
                  <a class="reply">Reply</a>
                </div>
              </div>
            </div>
            <div class="comment">
              <a class="avatar">
                <img src={man} />
              </a>
              <div class="content">
                <a class="author">Elliot Fu</a>
                <div class="metadata">
                  <span class="date">Yesterday at 12:30AM</span>
                </div>
                <div class="text">
                  <p>
                    This has been very useful for my research. Thanks as well!
                  </p>
                </div>
                <div class="actions">
                  <a class="reply">Reply</a>
                </div>
              </div>
            </div>
            <div class="comment">
              <a class="avatar">
                <img src={man} />
              </a>
              <div class="content">
                <a class="author">Joe Henderson</a>
                <div class="metadata">
                  <span class="date">5 days ago</span>
                </div>
                <div class="text">Dude, this is awesome. Thanks so much</div>
                <div class="actions">
                  <a class="reply">Reply</a>
                </div>
              </div>
            </div>
            <div class="comment">
              <a class="avatar">
                <img src={man} />
              </a>
              <div class="content">
                <a class="author">Joe Henderson</a>
                <div class="metadata">
                  <span class="date">5 days ago</span>
                </div>
                <div class="text">Dude, this is awesome. Thanks so much</div>
                <div class="actions">
                  <a class="reply">Reply</a>
                </div>
              </div>
            </div>
            <div class="comment">
              <a class="avatar">
                <img src={man} />
              </a>
              <div class="content">
                <a class="author">Joe Henderson</a>
                <div class="metadata">
                  <span class="date">5 days ago</span>
                </div>
                <div class="text">Dude, this is awesome. Thanks so much</div>
                <div class="actions">
                  <a class="reply">Reply</a>
                </div>
              </div>
            </div>
          </div>
          <a href="">Load More</a>
        </div>
      </div>
    </div>
  );
};

export default Product;

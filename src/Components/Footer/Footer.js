import React from "react";
import { AiOutlineHeart, AiFillFacebook, AiOutlineTwitter, AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { FiSend } from "react-icons/fi";
// import Event1 from '../../Assets/images/xevent_1.png.pagespeed.ic.lezOQ32eoa.webp'
// import Event2 from '../../Assets/images/xevent_2.png.pagespeed.ic.73ORYzPqiO.png'
// import Event3 from '../../Assets/images/xevent_3.png.pagespeed.ic.ExLaWzriUY.png'
// import Event4 from '../../Assets/images/event_4.png'
// import Blog1 from "../../Assets/images/xblog_1.png.pagespeed.ic.ZLKAQSWOVI.webp";
// import Blog2 from "../../Assets/images/blog_2.png";
// import Blog3 from "../../Assets/images/xblog_3.png.pagespeed.ic.sNauNU-hz6.png";
import './Footer.css'

const Footer = () => {
  return (
    <footer  className="footer_part">
      <div  className="container">
        <div  className="row justify-content-around">
          <div  className="col-sm-6 col-lg-3">
            <div  className="single_footer_part">
              <img src="img/footer_logo.png"  className="footer_logo" alt="" />
              <p>
                Heaven fruitful doesn't over lesser days appear creeping seasons
                so behold bearing days open
              </p>
              <div  className="work_hours">
                <h5>Working Hours:</h5>
                <ul>
                  <li>
                    {" "}
                    <p> Monday-Friday:</p> <span> 8AM - 6PM</span>
                  </li>
                  <li>
                    {" "}
                    <p>Saturday-Sunday:</p> <span> 8AM - 12PM</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div  className="col-sm-6 col-lg-2">
            <div  className="single_footer_part">
              <h4>Causes</h4>
              <ul  className="list-unstyled">
                <li>
                  <a href="#boat">Boat Shippment</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#transport">Transport Planning</a>
                </li>
                <li>
                  <a href="#transport">Transportation</a>
                </li>
                <li>
                  <a href="#truck">Truck Delivery Checking</a>
                </li>
              </ul>
            </div>
          </div>
          <div  className="col-sm-6 col-lg-3">
            <div  className="single_footer_part footer_3">
              <h4>Our Gallery</h4>
              <div  className="footer_img">                
              </div>
            </div>
          </div>
          <div  className="col-sm-6 col-lg-3">
            <div  className="single_footer_part">
              <h4>Newsletter</h4>
              <p>
                Heaven fruitful doesn't over lesser in days. Appear creeping
                seasons deve behold bearing days open
              </p>
              <div id="mc_embed_signup">
                <form
                  target="_blank"
                  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                   className="subscribe_form relative mail_part"
                  required=""
                >
                  <input
                    type="email"
                    name="EMAIL"
                    id="newsletter-form-email"
                    placeholder="Email Address"
                     className="placeholder hide-on-focus"
                    required=""
                  />
                  <button
                    type="submit"
                    name="submit"
                    id="newsletter-submit"
                     className="email_icon newsletter-submit button-contactForm"
                  >
                    <span className='send'><FiSend /></span>
                  </button>
                  <div  className="mt-10 info"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div  className="row">
          <div  className="col-lg-6">
            <div  className="copyright_text">
              <p>
                Copyright ©2021
                All rights reserved | This is designed by
                <span><AiOutlineHeart /></span>
                <a href="https://bashir-portfolio.netlify.app/" target="_blank" rel='noreferrer'>
                  Bashsofts
                </a>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="footer_icon social_icon">
              <ul className="list-unstyled">
                <li>
                  <a href="#icon"  className="single_social_icon">
                  <span><AiFillFacebook /></span>
                  </a>
                </li>
                <li>
                  <a href="#icon"  className="single_social_icon">
                  <span><AiOutlineTwitter /></span>
                  </a>
                </li>
                <li>
                  <a href="#icon"  className="single_social_icon">
                  <span><AiFillGithub /></span>
                  </a>
                </li>
                <li>
                  <a href="#icon"  className="single_social_icon">
                  <span><AiFillLinkedin /></span>
                  </a>
                </li>
                <li>
                  <a href="#icon"  className="single_social_icon">
                  <span><AiFillInstagram /></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

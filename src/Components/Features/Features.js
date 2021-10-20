import React from "react";
import './Features.css'

const Features = () => {
  return (
    <section className="w3l-features py-5" id="facilities">
      <div className="call-w3 py-lg-5 py-md-4 py-2">
        <div className="container">
          <div className="row main-cont-wthree-2">
            <div className="col-lg-5 feature-grid-left">
              <h5 className="title-small mb-1">Study and graduate</h5>
              <h3 className="title-big mb-4">Our Facilities </h3>
              <p className="text-para">
                Curabitur id gravida risus. Fusce eget ex fermentum, ultricies
                nisi ac sed, lacinia est. Quisque ut lectus consequat, venenatis
                eros et, commodo risus. Nullam sit amet laoreet elit.
                Suspendisse non magna a velit efficitur.{" "}
              </p>
              <p className="mt-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptas ab qui impedit, libero illo quia sequi quibusdam iure.
                Error minus quod reprehenderit quae dolor velit soluta animi
                voluptate dicta enim? Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Odio, provident!
              </p>
              <a href="#url" className="btn btn-primary btn-style mt-md-5 mt-4">
                Discover More
              </a>
            </div>
            <div className="col-lg-7 feature-grid-right mt-lg-0 mt-5">
              <div className="call-grids-w3 d-grid">
                <div className="grids-1 box-wrap">
                  <a href="#more" className="icon">
                    <span className="fa fa-certificate"></span>
                  </a>
                  <h4>
                    <a href="#feature" className="title-head">
                      Global Certificate
                    </a>
                  </h4>
                  <p>
                    Vivamus a ligula quam. Ut blandit eu leo non. Duis sed
                    doloramet laoreet.
                  </p>
                </div>
                <div className="grids-1 box-wrap">
                  <a href="#more" className="icon">
                    <span className="fa fa-book"></span>
                  </a>
                  <h4>
                    <a href="#feature" className="title-head">
                      Books &amp; Library
                    </a>
                  </h4>
                  <p>
                    Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor
                    amet laoreet.
                  </p>
                </div>
                <div className="grids-1 box-wrap">
                  <a href="#more" className="icon">
                    <span className="fa fa-trophy"></span>
                  </a>
                  <h4>
                    <a href="#feature" className="title-head">
                      Scholarship
                    </a>
                  </h4>
                  <p>
                    Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor
                    amet laoreet.
                  </p>
                </div>
                <div className="grids-1 box-wrap">
                  <a href="#more" className="icon">
                    <span className="fa fa-graduation-cap"></span>
                  </a>
                  <h4>
                    <a href="#feature" className="title-head">
                      Alumni Support
                    </a>
                  </h4>
                  <p>
                    Vivamus a ligula quam. Ut blandit eu leo non. Duis sed dolor
                    amet laoreet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

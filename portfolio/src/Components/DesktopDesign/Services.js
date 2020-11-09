import React, {forwardRef} from "react";

const Services = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="services" className="servicesDiv">
      <h1>Services</h1>
      <div className="row mt-5">
        <div id="servivcebox1" className=" col-md-5 mb-5 servicesboxes">
          <div className="row align-items-center cardInfo">
            <div className="col-2 mt-2 service-icon text-center">
              <i className="fas fa-tablet-alt serviceicons" />
            </div>
            <div className="py-5 col-10 service-articles">
              <span className="white-font">Web Apps</span>
              <p>
                From top to bottom, from the design to the logic to its
                deployment on servers, I'll create applications that run on the
                web and that'll conform to the screens of mobile devices.{" "}
              </p>
            </div>
          </div>
        </div>
        <div
          id="servivcebox2"
          className="col-md-5 mr-5 mb-5 ml-auto servicesboxes">
          <div className="row align-items-center cardInfo">
            <div className="col-2 service-icon text-center">
              <i className="fas fa-palette serviceicons" />
            </div>
            <div className="py-5 col-10 service-articles">
              <span className="white-font">Front-end</span>
              <p>
                The core or engine of an application is the internal logic but
                there’s also other components that help drive it such as the
                design, user experience, accessibility and even the
                language/framework that was used to create it. I know how to
                incorporate all of these ingredients to build websites and
                applications.
              </p>
            </div>
          </div>
        </div>
        <div className="w-100"></div>

        <div id="servivcebox3" className="col-md-5 mr-5 servicesboxes">
          <div className="row align-items-center cardInfo">
            <div className="col-2 service-icon text-center">
              <i className="fas fa-server serviceicons" />
            </div>
            <div className="py-5 col-10 service-articles">
              <span className="white-font">Back-end</span>
              <p>
                Taking a beautifully created web site or app and publishing it
                to the internet requires knowledge in client side and server
                side communication as well as deployment practices on domains
                and servers so it ultimately can be easily accessible for the
                world to enjoy. I can take a development build, move it to
                production and have the website ready to rock and roll in a
                short period of time.{" "}
              </p>
            </div>
          </div>
        </div>
        <div id="servivcebox4" className="col-md-5 mr-5 ml-auto servicesboxes">
          <div className="row align-items-center cardInfo">
            <div className="col-2 service-icon text-center">
              <i className="fas fa-lock serviceicons" />
            </div>
            <div className="py-5 col-10 service-articles">
              <span className="white-font">Security</span>
              <p>
                The security of a website is of utmost importance and I take it
                as such. Whether it’s protecting the sensitive data and
                information of clients, securing the website with SSL or even
                performance issues due to outside influences (such as DDOS
                attack protection), I have knowledge in security practices that
                give peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Services;

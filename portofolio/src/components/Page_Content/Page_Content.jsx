import "./Page_content.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function PageComponent() {
  return (
    <div id="content" className="container">
      
      
      {/* about section */}
      <div className="page_content" id="about">
        <h1>About us</h1>
        <div className="text_content">
          <p>
            At GraphicDesign.io, we were founded in 2015 by a team of passionate
            designers who wanted to help businesses achieve their design goals.
            Our team has grown to include over 50 employees who are dedicated to
            providing high-quality design services to clients. We believe that
            effective communication is key to successful design, and we work
            closely with our clients to ensure that their design needs are met.
            Our goal is to provide innovative and effective design solutions
            that help businesses stand out in their respective industries. We
            take pride in our work and strive to provide our clients with
            high-quality designs that effectively represent their brand image.
          </p>
        </div>
      </div>

      {/* services section */}
      <div className="page_content" id="services">
        <h1>Our services</h1>
        <div className="text_content">
          <p>
            We at GraphicDesign.io, we offer a range of specialized services to
            help businesses achieve their design goals. Here are some of the
            services we provide:
          </p>
          <ul>
            <li>
              <b>Logo Design:</b> We can help you create a unique and visually
              appealing logo that effectively represents your brand image.
            </li>
            <li>
              <b>Web Design:</b> Our team of professional designers can help you
              design a website that is visually appealing, user-friendly, and
              effectively represents your brand image.
            </li>
            <li>
              <b>Brochure Design:</b> We can help you design brochures that are
              visually appealing and informative, providing your customers with
              all the information they need about your products or services.
            </li>
            <li>
              <b>Marketing Collateral Design:</b> We can help you design
              marketing collateral, such as flyers, posters, and social media
              graphics, that are visually appealing and effective in promoting
              your business.
            </li>
            <li>
              <b>Illustration Design:</b> We can help you design illustrations
              that are unique and visually appealing, adding a touch of
              creativity to your marketing materials.
            </li>
            <li>
              <b>Product Design:</b> We can help you design product pages that
              showcase your products, services, or ideas, as well as product
              packaging that is visually appealing and effective in promoting
              your products.
            </li>
          </ul>
          {/* </p> */}
        </div>
      </div>

      {/* contact section */}
      <div className="page_content" id="contact">
        <h1>Contact</h1>
        <div className="text_content">
          <p>
            For any request or questions do not hesitate t contact us at the
            following email address: stoicamirela97@gmail.com. Also follow us
            below:
            <ul>
              <li>
                Linkedin:{" "}
                <a href="www.linkedin.com/in/mirela-estera-stoica-b36492182">
                  <FontAwesomeIcon
                    icon="fa-brands fa-linkedin"
                    style={{ color: "#1a5fb4" }}
                  />
                </a>
              </li>
              <li>
                Instagram:{" "}
                <a href="www.instagram.com">
                  <FontAwesomeIcon
                    icon="fa-brands fa-instagram"
                    style={{ color: "#9141ac" }}
                  />
                </a>
              </li>
              <li>
                Youtube:{" "}
                <a href="www.youtube.com">
                  <FontAwesomeIcon
                    icon="fa-brands fa-youtube"
                    style={{ color: "#e01b24" }}
                  />
                </a>
              </li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

import s from "./style.module.css";

export default function PageComponent() {
  return (
    <div id="content">
      <h1>About us</h1>
      <div className={s.page_content} id="about">
        <p>
        Hello there! At GraphicDesign.io, we offer a range of specialized services to help businesses achieve their design goals. Here are some of the services we provide:
        <ul>
            <li><b>Logo Design:</b> We can help you create a unique and visually appealing logo that effectively represents your brand image.</li>
            <li><b>Web Design:</b> Our team of professional designers can help you design a website that is visually appealing, user-friendly, and effectively represents your brand image.</li>
            <li><b>Brochure Design:</b> We can help you design brochures that are visually appealing and informative, providing your customers with all the information they need about your products or services.</li>
            <li><b>Marketing Collateral Design:</b> We can help you design marketing collateral, such as flyers, posters, and social media graphics, that are visually appealing and effective in promoting your business.</li>
            <li><b>Illustration Design:</b> We can help you design illustrations that are unique and visually appealing, adding a touch of creativity to your marketing materials.</li>
            <li><b>Product Design:</b> We can help you design product pages that showcase your products, services, or ideas, as well as product packaging that is visually appealing and effective in promoting your products.</li>
        </ul>
        </p>
      </div>
    </div>
  );
}

import "./index.scss";
import data from "../../data";

const Contact = () => {
  return (
    <div className="contact">
      <span className="contact_header">Contact</span>
      <span className="contact_tagline">
        If you would like to get in touch for any types of query, please opt for any of the options
        below:
      </span>
      <div className="contact_items">
        {data.contact.map(({ image, url }, i) => {
          return (
            <a key={i} href={url} target={"_blank"} className="contact_items_item">
              {/* <img src={image} alt="Not found" height={50} width={50} /> */}
              {image}
            </a>
          );
        })}
      </div>
    </div>

  );
};

export default Contact;
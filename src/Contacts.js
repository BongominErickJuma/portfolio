import React from "react";

const Contacts = () => {
  return (
    <div className="content" id="contact">
      <h2 className="title">Contact Me</h2>
      <p>
        If you have any inquiries or want to collaborate, feel free to reach out
        to me:
      </p>
      <footer className="footer">
        <a href="tel:+256786146150">
          <i className="fas fa-phone"></i>+256 786 146 150
        </a>
        <ul className="social-list">
          <li className="social-list__item">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=ericbongomin@gmail.com"
              className="footer__link"
              target="_blank"
            >
              <i className="fas fa-envelope"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://wa.me/+256786146150"
              target="_blank"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
          </li>
          <li className="social-list__item">
            <a
              className="social-list__link"
              href="https://www.linkedin.com/in/bongomin-erick-juma/"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default Contacts;

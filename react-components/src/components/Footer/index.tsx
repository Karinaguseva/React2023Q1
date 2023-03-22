import React, { Component } from 'react';
import './index.scss';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="wrapper">
          <div className="footer__container">
            <div className="footer__gitHub gitHub">
              <a
                className="gitHub__kar"
                href="https://github.com/Karinaguseva"
                target="_blank"
                rel="noreferrer"
              >
                KarinaGuseva
              </a>
            </div>
            <div className="footer__year">&copy; 2023</div>
            <a
              className="footer__rss"
              href="https://rs.school/js/"
              target="_blank"
              rel="noreferrer"
            >
              rs school course js
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footerNav">
      <section className="sitemap">
        <div>
          <h5>SiteName</h5>
          <a href="/#about">About</a>
          <a href="/learn">Learn</a>
          <a href="/faq">FAQ</a>
          <a href="/blog">Blog</a>
          <a href="/support">Support</a>
        </div>
        <div>
          <h5>Community</h5>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer noopener">
            Twitter
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer noopener">
            Facebook
          </a>
          <a href="https://google.com" target="_blank" rel="noreferrer noopener">
            Slack
          </a>
        </div>
        <div>
          <h5>More</h5>
          <a href="/explore">Showcase</a>
          <a href="/#contribute">Contribute</a>
          <a href="/legal">Legal</a>
        </div>
      </section>
      <section className="copyright">Copyright © 2020</section>
    </footer>
  );
};

export default Footer;

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-brand">
          <h2>Foodzilla</h2>
          <p>
            Delicious food, delivered to your doorstep.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </div>

        <div className="footer-info">
          <h3>Foodzilla</h3>
          <p>Discover the best restaurants around you.</p>
          <p>Fast. Fresh. Delicious.</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Foodzilla. All rights reserved.</p>
        <p>Made with ❤️ using React</p>
      </div>
    </footer>
  );
};

export default Footer;
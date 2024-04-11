import './Footer.scss';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer__left">
          <img
            className="footer__logo-1"
            src="/assets/logos/rimac-2.png"
            alt="Rimac"
          />
          <img
            className="footer__logo-2"
            src="/assets/logos/rimac-3.png"
            alt="Rimac"
          />
        </div>
        <div className="footer__right">
          <p className="footer__text">© 2024 RIMAC Seguros y Reaseguros.</p>
        </div>
      </div>
    </footer>
  );
}

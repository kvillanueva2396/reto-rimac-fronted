import './Header.scss';
import { FaPhone } from 'react-icons/fa6';

export default function Header() {
  return (
    <header className="header">
      <div className="container header-container">
        <div>
          <img src="/assets/logos/rimac.png" alt="Rimac" />
        </div>
        <ul className="header-info ui-list">
          <li>¡Compra por este medio!</li>
          <li className="header-info__numero">
            <FaPhone />
            <p>(01) 411 6001</p>
          </li>
        </ul>
      </div>
    </header>
  );
}

import { FaPhone } from 'react-icons/fa6';

export default function Header() {
  return (
    <header>
      <img src="/assets/logos/rimac.png" alt="Rimac" />
      <div>
        <p>¡Compra por este medio!</p>
        <div>
          <FaPhone />
          <p>(01) 411 6001</p>
        </div>
      </div>
    </header>
  );
}

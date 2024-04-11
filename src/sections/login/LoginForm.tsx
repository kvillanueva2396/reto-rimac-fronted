import './LoginForm.scss';
import { IoIosArrowDown } from 'react-icons/io';

export default function LoginForm() {
  return (
    <form className="login-form">
      <p className="login-form__description">
        Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
        asesoría. 100% online.
      </p>
      <div className="login-form-document">
        <div className="login-form-select-container">
          <select className="login-form__select">
            <option value="DNI">DNI</option>
            <option value="RUC">RUC</option>
          </select>
          <IoIosArrowDown className="login-form__select-icon" color="black" />
        </div>
        <div className="input-container input-container--no-border-left">
          {/* <label htmlFor="documentInput" className="hidden">
            Nro. de Documento
          </label> */}
          <input
            id="documentInput"
            className="input-container__input"
            type="text"
            aria-label="Numero de documento"
            placeholder="Nro. de documento"
          />
        </div>
      </div>
      <div className="input-container">
        {/* <label htmlFor="numeroCelular" className="hidden">
          Celular
        </label> */}
        <input
          id="numeroCelular"
          className="input-container__input"
          type="text"
          aria-label="Celular"
          placeholder="Celular"
        />
      </div>
    </form>
  );
}

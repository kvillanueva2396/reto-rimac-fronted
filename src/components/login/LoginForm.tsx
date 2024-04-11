import { Checkbox } from '@/components';
import './LoginForm.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';
import LoginTitle from './LoginTitle';

export default function LoginForm() {
  const [isCheckedPoliticaPrivacidad, setIsCheckedPoliticaPrivacidad] =
    useState(false);
  const [isCheckedPoliticaComunicaciones, setIsCheckedPoliticaComunicaciones] =
    useState(false);

  const handleCheckPoliticaPrivacidad = () => {
    setIsCheckedPoliticaPrivacidad(!isCheckedPoliticaPrivacidad);
  };

  const handleCheckPoliticaComunicaciones = () => {
    setIsCheckedPoliticaComunicaciones(!isCheckedPoliticaComunicaciones);
  };

  const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('submit');
  };

  return (
    <div className="login-form">
      <LoginTitle className="login-form__title" />
      <hr className="login-form__separator" />
      <form className="login-form__form" onSubmit={handleSubmit}>
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
          <input
            id="numeroCelular"
            className="input-container__input"
            type="text"
            aria-label="Celular"
            placeholder="Celular"
          />
        </div>
        <div className="login-form__checkboxes">
          <Checkbox
            isChecked={isCheckedPoliticaPrivacidad}
            onChecked={handleCheckPoliticaPrivacidad}
            description="Acepto la Politica de Privacidad"
          />
          <Checkbox
            isChecked={isCheckedPoliticaComunicaciones}
            onChecked={handleCheckPoliticaComunicaciones}
            description="Acepto la Politica Comunicaciones Comerciales"
          />
        </div>
        <p className="login-form__terminos">Aplican Términos y Condiciones.</p>
        <div className="login-form__button">
          <button className="btn btn-primary">Cotiza aqui</button>
        </div>
      </form>
    </div>
  );
}

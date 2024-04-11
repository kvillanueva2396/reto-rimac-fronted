import './Login.scss';
import { Footer } from '@/components';
import LoginForm from './LoginForm';
import LoginTitle from './LoginTitle';

export default function Login() {
  return (
    <>
      <section className="login">
        <img
          className="login__blur-left"
          src="/assets/blur-left.png"
          alt="Blur Left"
        />
        <img
          className="login__blur-left-2"
          src="/assets/blur-left-2.png"
          alt="Blur Left"
        />
        <img
          className="login__blur-right"
          src="/assets/blur-right.png"
          alt="Blur Right"
        />
        <img
          className="login__blur-right-2"
          src="/assets/blur-right-2.png"
          alt="Blur Right"
        />
        <div className="login-container container">
          <div className="login-left">
            <img
              className="login__family"
              src="/assets/familia.png"
              alt="Familia"
            />
          </div>
          <div className="login-mobile">
            <LoginTitle className="login-mobile__title" />
            <div className="login-mobile__image">
              <img
                className="login__family"
                src="/assets/familia-2.png"
                alt="Familia"
              />
            </div>
          </div>
          <LoginForm />
        </div>
      </section>
      <Footer />
    </>
  );
}

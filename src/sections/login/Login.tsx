import './Login.scss';
import { Footer } from '@/components';

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
        {/* <div>
          <img src="/assets/familia.png" alt="Familia" />
        </div> */}
      </section>
      <Footer />
    </>
  );
}

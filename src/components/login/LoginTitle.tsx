import './LoginTitle.scss';

interface Props {
  className?: string;
}

export default function LoginTitle({ className }: Props) {
  return (
    <div className={`login-title ${className}`}>
      <p className="login-title-gradient">Seguro Salud Flexible</p>
      <h2 className="login-title__message">Creado para ti y tu familia</h2>
    </div>
  );
}

import './Checkbox.scss';

interface Props {
  isChecked: boolean;
  onChecked: () => void;
  description?: string;
}

export default function Checkbox({ isChecked, onChecked, description }: Props) {
  const handleChecked = () => {
    if (onChecked) onChecked();
  };

  return (
    <label className="checkbox">
      <input
        className="checkbox__input"
        type="checkbox"
        checked={isChecked}
        onClick={handleChecked}
        onChange={() => {}}
      />
      <span className="checkmark"></span>
      <p className="checkbox__text">{description}</p>
    </label>
  );
}

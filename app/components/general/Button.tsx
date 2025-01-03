interface ButtonProps {
  text: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  small?: boolean;
  outline?: boolean;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  small,
  outline,
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      className={`rounded-lg mt-3 ${small ? "w-[250px]" : "w-full"} ${
        outline ? "border text-black " : "bg-black text-white"
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

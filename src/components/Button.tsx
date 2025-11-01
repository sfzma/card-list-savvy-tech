interface Props {
  content: string;
  onClick?: () => void;
  className: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({ content, onClick, className = "", type }: Props) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {content}
    </button>
  );
};

export default Button;

type ButtonProps = {
  handleClick: (text: string) => void;
};

const Button = ({ handleClick }: ButtonProps) => {
  return (
    <div className="text-center">
      <button
        className="btn my-5 btn-md bg-blue-400"
        onClick={() => handleClick("Hello there , it's clicked")}
      >
        Click me
      </button>
    </div>
  );
};

export default Button;

import React, { FC } from 'react';

interface ButtonProps {
  onClick: () => void;
  label: string;
}

const Button: FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <button 
      onClick={onClick} 
      className="bg-blue-500 text-white p-2 rounded mt-4"
    >
      {label}
    </button>
  );
};

export default Button;

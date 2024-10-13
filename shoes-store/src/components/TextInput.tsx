import React from "react";

interface TextInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string; // Para aceitar classes adicionais
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  className,
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-2 font-semibold">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="p-2 border rounded border-gray-300"
      />
    </div>
  );
};

export default TextInput;

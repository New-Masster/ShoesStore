import React, { FC } from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card: FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-white shadow-md rounded p-4 mb-4">
      <h2 className="text-lg font-bold">{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Card;

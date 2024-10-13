import { useState } from "react";

interface ShoeCardProps {
  name: string;
  description: string;
}

const ShoeCard = ({ name, description }: ShoeCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="border p-4 rounded-lg shadow-md bg-white m-2 w-64">
      <h3 className="text-lg font-bold">{name}</h3>
      <p className="text-gray-500">{description}</p>
      <button
        className={`mt-2 p-2 rounded ${isFavorite ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'}`}
        onClick={toggleFavorite}
      >
        {isFavorite ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  );
};

export default ShoeCard;

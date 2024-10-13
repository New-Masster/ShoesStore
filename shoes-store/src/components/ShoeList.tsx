import ShoeCard from './ShoeCard';

interface ShoeListProps {
  shoes: { name: string; description: string }[];
}

const ShoeList = ({ shoes }: ShoeListProps) => {
  return (
    <div className="flex flex-wrap justify-center">
      {shoes.map((shoe, index) => (
        <ShoeCard key={index} name={shoe.name} description={shoe.description} />
      ))}
    </div>
  );
};

export default ShoeList;

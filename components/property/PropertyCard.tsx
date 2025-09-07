interface PropertyCardProps {
  property: {
    id: string;
    title: string;
    location: string;
    price: number;
    image: string;
  };
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-lg">{property.title}</h2>
        <p className="text-gray-600">{property.location}</p>
        <p className="text-green-600 font-semibold">${property.price}</p>
      </div>
    </div>
  );
}

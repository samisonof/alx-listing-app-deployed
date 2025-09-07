interface PropertyDetailProps {
  property: {
    id: string;
    title: string;
    location: string;
    price: number;
    image: string;
    description: string;
  };
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={property.image} alt={property.title} className="w-full h-96 object-cover rounded-lg" />
      <h1 className="text-3xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-600">{property.location}</p>
      <p className="text-green-600 font-semibold text-xl mt-2">${property.price}</p>
      <p className="mt-4">{property.description}</p>
    </div>
  );
}

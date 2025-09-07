import React from 'react';

export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl }) => (
  <div className="border rounded shadow p-4">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded" />
    <h3 className="mt-2 font-semibold text-lg">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Card;

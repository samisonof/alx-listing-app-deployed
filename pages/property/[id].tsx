import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";
import PropertyDetail from "@/components/property/PropertyDetail";

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
  description: string;
}

export default function PropertyDetailPage() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;

      try {
        const response = await axios.get(`/api/properties/${id}`);
        setProperty(response.data);
      } catch (err: any) {
        console.error("Error fetching property details:", err);
        setError("Failed to load property details");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) return <p>Loading property details...</p>;
  if (error) return <p>{error}</p>;
  if (!property) return <p>Property not found</p>;

  return <PropertyDetail property={property} />;
}

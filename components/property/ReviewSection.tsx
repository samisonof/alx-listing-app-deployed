import axios from "axios";
import { useState, useEffect } from "react";

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

interface ReviewSectionProps {
  propertyId: string;
}

const ReviewSection = ({ propertyId }: ReviewSectionProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      if (!propertyId) return;

      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews.");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (reviews.length === 0) return <p>No reviews yet.</p>;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Reviews</h2>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="p-4 border rounded shadow-sm">
            <p className="font-semibold">{review.name}</p>
            <p className="text-yellow-500">Rating: {review.rating}/5</p>
            <p className="text-gray-700 mt-1">{review.comment}</p>
            <p className="text-gray-400 text-sm mt-1">{new Date(review.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;

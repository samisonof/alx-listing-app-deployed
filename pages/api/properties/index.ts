import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json([
    { id: "1", title: "Luxury Villa", location: "Addis Ababa", price: 200, image: "/villa.jpg" },
    { id: "2", title: "City Apartment", location: "Bole", price: 120, image: "/apartment.jpg" }
  ]);
}

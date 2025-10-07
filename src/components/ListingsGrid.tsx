// ListingsGrid: displays a responsive grid of property cards

import { useEffect, useState } from "react";
import PropertyCard from "./PropertyCard";
import { fetchListings } from "@/lib/listings";

export default function ListingsGrid({ featured = false }: { featured?: boolean }) {
  const [listings, setListings] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadListings() {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchListings({ featured });
        setListings(data);
      } catch (err: any) {
        setError(err.message || "Failed to load listings.");
      } finally {
        setLoading(false);
      }
    }
    loadListings();
  }, [featured]);

  if (loading) {
    return <div className="col-span-full text-center text-gray-400 py-12">Loading properties...</div>;
  }
  if (error) {
    return <div className="col-span-full text-center text-red-500 py-12">{error}</div>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {listings.length === 0 ? (
        <div className="col-span-full text-center text-gray-500 py-12">No properties found.</div>
      ) : (
        listings.map((listing) => <PropertyCard key={listing.id} listing={listing} />)
      )}
    </div>
  );
}

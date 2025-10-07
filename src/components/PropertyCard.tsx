// PropertyCard: displays a single property in the grid
export default function PropertyCard({ listing }: { listing: any }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
      <div className="aspect-video bg-gray-100 rounded mb-3 overflow-hidden">
        {/* TODO: Display property image */}
      </div>
      <h2 className="text-xl font-semibold text-sky-700 mb-1">{listing.title}</h2>
      <p className="text-gray-600 mb-2">{listing.location}</p>
      <div className="flex justify-between items-center mt-auto">
        <span className="text-lg font-bold text-sky-800">${listing.price}</span>
        <span className="text-xs px-2 py-1 bg-sky-100 text-sky-700 rounded">{listing.type}</span>
      </div>
    </div>
  );
}

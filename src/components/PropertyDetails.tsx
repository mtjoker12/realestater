// PropertyDetails: full details for a property
export default function PropertyDetails({ property }: { property: any }) {
  if (!property) return null;
  return (
    <main className="min-h-screen bg-white">
      <section className="max-w-3xl mx-auto py-8 px-4">
        <div className="aspect-video bg-gray-100 rounded mb-6 overflow-hidden">
          {/* TODO: Display property images */}
        </div>
        <h1 className="text-3xl font-bold text-sky-700 mb-2">{property.title}</h1>
        <p className="text-lg text-gray-600 mb-4">{property.location}</p>
        <div className="mb-4">
          <span className="text-xl font-bold text-sky-800">${property.price}</span>
          <span className="ml-4 text-sm px-2 py-1 bg-sky-100 text-sky-700 rounded">{property.type}</span>
        </div>
        <p className="mb-6 text-gray-700">{property.description}</p>
        <div className="text-sm text-gray-500">Contact: {property.contact_info}</div>
      </section>
    </main>
  );
}

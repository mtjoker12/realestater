// Property details page
import PropertyDetails from "@/components/PropertyDetails";
import { notFound } from "next/navigation";
import { fetchProperty } from "@/lib/listings";

export default async function PropertyPage({ params }: { params: { id: string } }) {
  const property = await fetchProperty(params.id);
  if (!property) return notFound();
  return <PropertyDetails property={property} />;
}

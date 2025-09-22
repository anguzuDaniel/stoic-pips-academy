import { services } from "@/data/services";
import GetStartedPage from "../page";

export default function GetStartedServicePage({
  params,
}: {
  params: { service: string };
}) {
  const service = services[params.service];

  if (!service) {
    return <div className="min-h-screen flex items-center justify-center">The service provided was found.</div>;
  }

  console.log(service);

  return <GetStartedPage 
    title={service.title} 
    description={service.description} 
    price={service.price}
    originalPrice={service.originalPrice}
    features={service.features}
  />;
}


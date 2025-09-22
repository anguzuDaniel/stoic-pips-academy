import { services } from "@/data/services.js";
import GetStartedPage from "../GetStartedPage.jsx";

export default function GetStartedServicePage({
  params,
}: {
  params: { service: string };
}) {
  const service = services[params.service];

  if (!service) {
    return <div className="min-h-screen flex items-center justify-center">Service not found.</div>;
  }

  return <GetStartedPage service={service} />;
}

import { SITE_URL } from "./site";

export const absoluteUrl = (path: string): string =>
  new URL(path, SITE_URL).toString();

type ServiceSchemaInput = {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
  areaServed?: string;
};

export function serviceSchema(input: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absoluteUrl(input.url),
    serviceType: input.serviceType ?? input.name,
    areaServed: input.areaServed ?? "United States",
    provider: {
      "@type": "LocalBusiness",
      name: "Amped Web Studios",
      url: SITE_URL,
    },
  };
}

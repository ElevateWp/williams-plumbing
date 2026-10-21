import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('pergola-roofing');

export default function ServicePage() {
  return <ServiceLandingPage slug="pergola-roofing" />;
}

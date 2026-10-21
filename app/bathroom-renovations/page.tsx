import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('bathroom-renovations');

export default function ServicePage() {
  return <ServiceLandingPage slug="bathroom-renovations" />;
}

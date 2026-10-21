import type { Metadata } from 'next';
import ServiceLandingPage, { getServiceMetadata } from '@/components/sections/services/ServiceLandingPage';

export const metadata: Metadata = getServiceMetadata('split-system-air-conditioning');

export default function ServicePage() {
  return <ServiceLandingPage slug="split-system-air-conditioning" />;
}

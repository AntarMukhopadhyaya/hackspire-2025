'use client';

import dynamic from 'next/dynamic';

const ParticlesWrapper = dynamic(
  () => import('./ParticlesWrapper'),
  { 
    ssr: false,
    loading: () => <div className="fixed inset-0 -z-10" />
  }
);

export default function ParticlesClient() {
  return <ParticlesWrapper />;
}

'use client';

import * as React from 'react';

type CombinedProviderType = React.ComponentType<{ children: React.ReactNode }>;

interface CombinedProvidersProps {
  providers?: CombinedProviderType[];
  children: React.ReactNode;
}

export const CombinedProviders: React.FC<CombinedProvidersProps> = ({
  providers = [],
  children,
}) => {
  return providers.reduceRight(
    (accumulatedChildren, CurrentProvider) => (
      <CurrentProvider>{accumulatedChildren}</CurrentProvider>
    ),
    children
  );
};

CombinedProviders.displayName = 'CombinedProviders';
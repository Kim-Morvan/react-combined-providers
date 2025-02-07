// Enable React Server Components by marking this component as client-side only
'use client';

import * as React from 'react';

// Define a type for providers that accept children as ReactNode
type CombinedProviderType = React.ComponentType<{ children: React.ReactNode }>;

// Props interface for the CombinedProviders component
interface CombinedProvidersProps {
  // Optional array of provider components to be nested
  providers?: CombinedProviderType[];
  // ReactNode that will be wrapped by all providers
  children: React.ReactNode;
}

// Main component that combines multiple providers into a single nested structure
export const CombinedProviders: React.FC<CombinedProvidersProps> = ({
  // Default to empty array if no providers are passed
  providers = [],
  children,
}) => {
  // Use reduceRight to nest providers from right to left
  // This ensures the first provider in the array is the outermost wrapper
  return providers.reduceRight(
    (accumulatedChildren, CurrentProvider) => (
      <CurrentProvider>{accumulatedChildren}</CurrentProvider>
    ),
    children
  );
};

// Set a display name for better debugging experience in React DevTools
CombinedProviders.displayName = 'CombinedProviders';
import * as React from 'react';

type CombinedProviderType = React.ComponentType<{ children: React.ReactNode }>;

const combinedProviders = (...providers: CombinedProviderType[]): React.FC<{ children: React.ReactNode }> => {
  return ({ children }) => {
    return providers.reduceRight(
      (AccumulatedChildren, CurrentProvider) => (
        <CurrentProvider>{AccumulatedChildren}</CurrentProvider>
      ),
      children
    );
  };
};

export const CombinedProviders = ({ 
  providers = [], 
  children 
}: { 
  providers?: CombinedProviderType[]; 
  children: React.ReactNode;
}) => {
  const CombinedProvider = combinedProviders(...providers);
  return <CombinedProvider>{children}</CombinedProvider>;
};
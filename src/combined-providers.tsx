import { ReactNode, ComponentType } from "react";

type CombinedProviderType = ComponentType<{ children: ReactNode }>;

// Function to combine multiple providers into a single provider component
const combinedProviders = (
  ...providers: CombinedProviderType[]
): CombinedProviderType => {
  return ({ children }: { children: ReactNode }) => {
    return providers.reduceRight(
      (AccumulatedChildren, CurrentProvider) => (
        <CurrentProvider>{AccumulatedChildren}</CurrentProvider>
      ),
      children
    );
  };
};

// Default provider component that users can wrap around their app
const CombinedProviders: ComponentType<{
  providers?: CombinedProviderType[];
  children: ReactNode;
}> = ({ providers = [], children }) => {
  const CombinedProvider = combinedProviders(...providers);
  return <CombinedProvider>{children}</CombinedProvider>;
};

export default CombinedProviders;
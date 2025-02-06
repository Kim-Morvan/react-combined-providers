import { ReactNode, ComponentType, FC } from "react";

type CombinedProviderType = ComponentType<{ children: ReactNode }>;

interface CombinedProvidersProps {
  providers?: CombinedProviderType[];
  children: ReactNode;
}

const combinedProviders = (...providers: CombinedProviderType[]): FC<{ children: ReactNode }> => {
  return ({ children }) => {
    return providers.reduceRight(
      (AccumulatedChildren, CurrentProvider) => (
        <CurrentProvider>{AccumulatedChildren}</CurrentProvider>
      ),
      children
    );
  };
};

const CombinedProviders: FC<CombinedProvidersProps> = ({ providers = [], children }) => {
  const CombinedProvider = combinedProviders(...providers);
  return <CombinedProvider>{children}</CombinedProvider>;
};

export default CombinedProviders;
export type { CombinedProvidersProps };
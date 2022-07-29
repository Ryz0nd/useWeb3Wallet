import { ReactNode } from "react";

type CosmosProviderProps = {
  children: ReactNode;
};

export const CosmosProvider = ({ children }: CosmosProviderProps) => {
  return <>{children}</>;
};

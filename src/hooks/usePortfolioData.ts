import { PortfolioData } from "../types";
import portfolioData from "../data/portfolioData.json";

export const usePortfolioData = (): PortfolioData => {
  return portfolioData as unknown as PortfolioData;
};

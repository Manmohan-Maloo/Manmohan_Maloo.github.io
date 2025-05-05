import { PortfolioData } from '../types';
import portfolioData from '../data/portfolioData.json';

export const fetchPortfolioData = async (): Promise<PortfolioData> => {
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(portfolioData);
    }, 500);
  });
};

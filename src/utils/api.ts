import { PortfolioData } from '../types';
import portfolioData from '../data/portfolioData.json';

export const fetchPortfolioData = (): PortfolioData => {
  return portfolioData as PortfolioData;
};

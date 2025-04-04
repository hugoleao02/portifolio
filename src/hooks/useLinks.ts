import { NavLink, FooterLink } from '../types/links';
import linksData from '../data/links.json';

export const useNavLinks = (): NavLink[] => {
  return linksData.nav;
};

export const useFooterLinks = (): FooterLink[] => {
  return linksData.footer;
}; 
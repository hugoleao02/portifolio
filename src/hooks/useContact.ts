import { Contact } from '../types/contact';
import contactData from '../data/contact.json';

export const useContact = (): Contact => {
  return contactData;
}; 
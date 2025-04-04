import { Profile } from '../types/profile';
import profileData from '../data/profile.json';

export const useProfile = (): Profile => {
  return profileData;
}; 
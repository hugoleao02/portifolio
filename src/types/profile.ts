export interface SocialLinks {
  github: string;
  linkedin: string;
  email: string;
}

export interface Profile {
  name: string;
  title: string;
  description: string;
  image: string;
  about: string;
  objectives: string;
  available: boolean;
  social: SocialLinks;
} 
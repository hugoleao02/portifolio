export interface Profile {
  name: string;
  title: string;
  description: string;
  image: string;
  about: string;
  objectives: string;
  available: boolean;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
} 
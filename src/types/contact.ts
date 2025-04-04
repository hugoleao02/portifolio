export interface Contact {
  email: string;
  phone?: string;
  address?: string;
  social: {
    github?: string;
    linkedin?: string;
    twitter?: string;
  };
} 
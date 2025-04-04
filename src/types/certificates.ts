export interface Certificate {
  name: string;
  file: string;
}

export interface CertificateGroup {
  title: string;
  institution: string;
  description: string;
  icon: string;
  certificates: Certificate[];
} 
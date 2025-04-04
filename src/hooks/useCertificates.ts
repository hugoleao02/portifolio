import { CertificateGroup } from '../types/certificates';

const certificatesData = require('../data/certificates.json');

export const useCertificates = (): CertificateGroup[] => {
  return certificatesData.groups;
};

export const useFeaturedCertificates = (): CertificateGroup[] => {
  return certificatesData.groups.slice(0, 3);
}; 
export interface Project {
  id: string;
  role: {
    en: string;
    fr: string;
  };
  enterprise: string;
  description: {
    en: string;
    fr: string;
  };
  image: string;
  link: string;
  technologies: {
    id: string;
    name: string;
  }[];
}
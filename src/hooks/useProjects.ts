import { Project } from '../types/projects';

const projectsData = require('../data/projects.json');

export const useProjects = (): Project[] => {
  return projectsData.projects;
};

export const useFeaturedProjects = (): Project[] => {
  return projectsData.projects.filter((project: Project) => project.featured);
}; 
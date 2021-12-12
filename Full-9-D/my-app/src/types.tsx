export interface CoursePartBase {
  name: string;
  exerciseCount: number;
  type: string;
}
  
export interface CourseNormalPart extends CoursePartBase {
  type: "normal";
  description: string;
}
  
export interface CourseProjectPart extends CoursePartBase {
  type: "groupProject";
  description?: string;
  groupProjectCount: number;
}
  
export interface CourseSubmissionPart extends CoursePartBase {
  type: "submission";
  description: string;
  exerciseSubmissionLink: string;
}

export interface CourseDescriptionPart extends CoursePartBase {
  description: string;
  exerciseSubmissionLink?: string;
}

export type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart | CourseDescriptionPart;
  

  
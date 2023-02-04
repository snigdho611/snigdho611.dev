export interface IProject {
  id: number;
  title: string;
  description: string;
  stacks: string[];
  url: string;
}

export interface IExperience {
  id: number;
  company: string;
  title: string;
  timeStart: string;
  timeEnd: string;
  url: string;
  description: string[];
}

export interface IContact {
  id: number;
  image: string;
  url: string;
}

export interface IParagraph {
  text: string;
  url: string;
}

export interface IData {
  projectsData: IProject[];
  experienceData: IExperience[];
  contactData: IContact[];
  aboutData: IParagraph[];
}

export interface IError {
  message: string;
  code: number;
  data?: any[];
}

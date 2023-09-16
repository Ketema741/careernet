import { createContext } from 'react';

export interface Internship {
  title: string,
  description: string,
  category: string,
}

interface InternshipContextType {
  internships: Internship[] | null;
  internship: Internship | null;
  current: Internship | null;
  filtered: Internship[] | null;
  getInternships: () => Promise<void>;
  getInternship: () => Promise<void>;
  updateInternship: () => Promise<void>;
  clearInternships: () => void;
  setCurrent: (internship: Internship) => void;
  clearCurrent: () => void;
  filterInternships: (text: string) => void;
  clearFilter: () => void;

}

const internshipContext = createContext<InternshipContextType | undefined>(undefined);

export default internshipContext;

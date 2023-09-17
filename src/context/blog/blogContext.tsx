import { useContext, createContext } from 'react';

export interface BlogPost {
  _id: string;
  user: {
    _id: string;
    firstName: string;
    email: string;
    bio?: string;
    userImage: string[];
  };
  category: string;
  blogImages: string[];
  title: string;
  excerpt: string;
  summary: string;
  description: string;
  steps: string[];
  timeline: string[];
  takeaways: string[];
  comments: any[];
}

export interface BlogContextType {
  blogs: BlogPost[] | null,
  blog: BlogPost | null,
  relatedBlogs: BlogPost[] | null,
  current: BlogPost | null,
  filtered: BlogPost[] | null,
  getBlogs: () => Promise<void>,
  getBlog: (_id: string) => Promise<void>,
  updatePost: () => void,
  clearPosts: () => void,
  setCurrent: (blog: BlogPost) => void,
  clearCurrent: () => void,
  filterBlogs: (query: string) => void,
  clearFilter: () => void,
  getRelatedBlogs: (text:string) => void,
}
const blogContext = createContext<BlogContextType | undefined>(undefined);

// Create a custom hook to use the context
export const useBlogContext = () => {
  const context = useContext(blogContext);
  if (!context) {
    throw new Error('useBlogContext must be used within a BlogContextProvider');
  }
  return context;
};

export default blogContext;

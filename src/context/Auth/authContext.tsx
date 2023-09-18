import { useContext, createContext } from 'react';

export interface User {
  _id?: string;
  firstName: string;
  email: string;
  bio?: string;
  userImage: string[];
}

type loginProps = {
  email: string,
  passowrd: string,
}

export interface AuthContextType {
  user: User | null,
  token: string | null,
  currentUser: User | null,
  isUserAuthenticated: string | null,
  userLoading: boolean | null,
  error: string | null,
  userRegister: (user: User, images: string[]) => Promise<void>,
  setCurrent: (user: User) => void,
  userLogin: (formData: loginProps) => Promise<void>,
  logout: () => void,
  loadUser: () => void,
  removeImage: (public_id:string) => Promise<void>,
}
const authContext = createContext<AuthContextType | undefined>(undefined);

// Create a custom hook to use the context
export const useAuthContext = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error('useAuthContext must be used within a AuthContextProvider');
  }
  return context;
};

export default authContext;

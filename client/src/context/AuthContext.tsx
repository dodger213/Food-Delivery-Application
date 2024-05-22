import LoadingSpinner from "@/components/common/LoadingSpinner";
import { VerifyUserApi } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { createContext, ReactNode, useContext } from "react";



export type AuthContext = {
  isAuth: boolean;
};

const initialValue = {
  isAuth: false,
};

export const AuthContext = createContext(initialValue);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const { isError, isLoading } = useQuery({
    queryKey: ["authuser"],
    queryFn: VerifyUserApi,
  });

  if (isLoading) {
    return <LoadingSpinner />;
  }


  return <AuthContext.Provider value={{ isAuth: !isError }}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }
  return context as AuthContext;
};

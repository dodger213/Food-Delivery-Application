import LoadingSpinner from "@/components/common/LoadingSpinner";
import { verifyAdminApi } from "@/services/admin.api";
import { VerifyUserApi } from "@/services/api";
import { useQuery } from "@tanstack/react-query";
import { createContext, ReactNode, useContext, useState } from "react";



export type AuthContext = {
  isAuth: boolean;
  isAdmin: boolean
};

const initialValue = {
  isAuth: false,
  isAdmin :false
};

export const AuthContext = createContext(initialValue);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [adminValue] = useState(() => JSON.parse(localStorage.getItem("checkwho")!));
  const { isError, isLoading } = useQuery({
    queryKey: ["authuser"],
    queryFn: VerifyUserApi,
  });

  const {isError:admin} = useQuery({
    queryKey: ['authadmin'],
    queryFn: verifyAdminApi,
    retry: false,
    enabled: !!adminValue?.value
  })

  if (isLoading) {
    return <LoadingSpinner />;
  }


  return <AuthContext.Provider value={{ isAuth: !isError, isAdmin: !admin }}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within a AuthContextProvider");
  }
  return context as AuthContext;
};

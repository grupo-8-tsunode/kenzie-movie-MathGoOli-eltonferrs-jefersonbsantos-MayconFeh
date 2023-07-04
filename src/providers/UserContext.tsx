import { createContext, useEffect, useState } from "react";

import { api } from "../services/api";
import { IUser, IChildren, ISubmit, IReview, IUserContext } from "./@types";
import { TypeResgisterFormValue } from "../pages/Register/registerSchema";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IChildren) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setLoading] = useState<boolean>(true);

  const loadUser = async () => {
    const token = localStorage.getItem("@KenzieMovie:Token");
    const userId = localStorage.getItem("@KenzieMovie:UserID");

    if (token) {
      try {
        const { data } = await api.get("/users/" + userId, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(data);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    const loadUserFunc = async () => {
      await loadUser();
      setLoading(false);
    };
    loadUserFunc();
  }, []);

  const userLoginSubmit = async (formData: ISubmit) => {
    try {
      const { data } = await api.post("/login", formData);
      localStorage.setItem("@KenzieMovie:Token", data.accessToken);
      localStorage.setItem("@KenzieMovie:UserID", data.user.id);

      loadUser();
    } catch (error) {
      console.error(error);
    }
  };

  const userLogoff = () => {
    localStorage.removeItem("@KenzieMovie:Token");
    localStorage.removeItem("@KenzieMovie:UserID");
  };

  const userAddReview = async (review: IReview) => {
    const token = localStorage.getItem("@KenzieMovie:Token");

    try {
      await api.post("/reviews", review, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const userEditReview = async (review: IReview, movieId: string) => {
    const token = localStorage.getItem("@KenzieMovie:Token");

    try {
      await api.put(`/reviews/${movieId}`, review, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const userDeleteReview = async (movieId: string) => {
    const token = localStorage.getItem("@KenzieMovie:Token");

    try {
      await api.delete(`/reviews/${movieId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const registerNewuser= async (data:TypeResgisterFormValue)=>{
    try {
      await api.post("/users", data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <UserContext.Provider
      value={{
        isLoading,
        user,
        loadUser,
        userLoginSubmit,
        userLogoff,
        userAddReview,
        userEditReview,
        userDeleteReview,
        registerNewuser
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

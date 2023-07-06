import { createContext, useEffect, useState } from "react";

import { api } from "../services/api";
import { IUser, IChildren, ISubmit, IReview, IUserContext } from "./@types";
import { TypeResgisterFormValue } from "../pages/Register/registerSchema";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IChildren) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isCreateModal , setIsCreateModal] = useState<boolean>(false)
  const [isEditModal , setIsEditModal] = useState<boolean>(false)
  const navigate= useNavigate()

  const loadUser = async () => {
    const token = localStorage.getItem("@KenzieMovie:Token");
    const userId = localStorage.getItem("@KenzieMovie:UserID");

    if (token) {
      try {
        setLoading(true)
        const { data } = await api.get<IUser>("/users/" + userId, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(data);
      } catch (error) {
        console.error(error);
        localStorage.removeItem("@KenzieMovie:Token");
        localStorage.removeItem("@KenzieMovie:UserID");

      } finally {
        setLoading(false)
      }
    }
  };

  useEffect(() => {
    const loadUserFunc = async () => {
      await loadUser();
      setLoading(false)
    };
    loadUserFunc();
  }, []);

  const userLoginSubmit = async (formData: ISubmit) => {
    try {
      setLoading(true)
      const { data } = await api.post("/login", formData);
      localStorage.setItem("@KenzieMovie:Token", data.accessToken);
      localStorage.setItem("@KenzieMovie:UserID", data.user.id);
      toast.success("logado com Sucesso!")
      navigate("/")
      loadUser();
    } catch (error) {
      console.error(error);
      toast.error("Email ou senha incorreta!")
    } finally{
      setLoading(false)
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
      toast.success("Review adcionado")
    } catch (error) {
      console.error(error);
      toast.error("Reviw não adcionado")
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
      toast.success("Review atualizada!")
    } catch (error) {
      console.error(error);
      toast.error("Review não atualizada")
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
      toast.success("Review deletada")
    } catch (error) {
      console.error(error);
      toast.error("error ao deletar")
    }
  };

  const registerNewuser= async (data:TypeResgisterFormValue)=>{
    try {
      setLoading(true)
      await api.post("/users", data)
      toast.success("Usuario cadastrado")
      navigate("/login")
    } catch (error) {
      toast.error("Usuario não cadastrado")
    } finally {
      setLoading(false)
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
        registerNewuser,
        isCreateModal,
        setIsCreateModal,
        isEditModal,
        setIsEditModal
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

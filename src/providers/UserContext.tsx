import { createContext, useEffect, useState } from "react";

import { api } from "../services/api";
import {
  IUser,
  IChildren,
  ISubmit,
  IReview,
  IUserContext,
  IUserName,
} from "./@types";
import { TypeResgisterFormValue } from "../pages/Register/registerSchema";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IChildren) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isCreateModal, setIsCreateModal] = useState<boolean>(false);
  const [isEditModal, setIsEditModal] = useState<boolean>(false);
  const [allUsers, setAllUsers] = useState<IUserName[]>([]);
  const navigate = useNavigate();

  const loadUser = async () => {
    const token = localStorage.getItem("@KenzieMovie:Token");
    const userId = localStorage.getItem("@KenzieMovie:UserID");

    if (token) {
      try {
        setLoading(true);
        const { data } = await api.get<IUser>("/users/" + userId, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(data);
      } catch (error) {
      
        localStorage.removeItem("@KenzieMovie:Token");
        localStorage.removeItem("@KenzieMovie:UserID");
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    const loadUserFunc = async () => {
      await loadUser();
      setLoading(false);
    };
    getAllUsers();
    loadUserFunc();
  }, []);

  const userLoginSubmit = async (formData: ISubmit) => {
    try {
      setLoading(true);
      const { data } = await api.post("/login", formData);
      localStorage.setItem("@KenzieMovie:Token", data.accessToken);
      localStorage.setItem("@KenzieMovie:UserID", data.user.id);
      toast.success("logado com Sucesso!",{
        toastId: 1
      });
      navigate("/");
      loadUser();
    } catch (error) {
    
      toast.error("Email ou senha incorreta!",{
        toastId: 2
      });
    } finally {
      setLoading(false);
    }
  };

  const userLogoff = () => {
    localStorage.removeItem("@KenzieMovie:Token");
    localStorage.removeItem("@KenzieMovie:UserID");
    setUser(null);
  };

  const userAddReview = async (review: IReview, setTargetReviews:React.Dispatch<React.SetStateAction<IReview[] | undefined>>, targetReviews:IReview[]| undefined ) => {
    const token = localStorage.getItem("@KenzieMovie:Token");
    review.score = Number(review.score);
    if(targetReviews){
      try {
        const {data} = await api.post("/reviews", review, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
       
        setTargetReviews( [...targetReviews, data] )
        toast.success("Review adicionado",{
          toastId: 4
        });
      } catch (error) {

        toast.error("Review não adicionado", {
          toastId: 5
        });
      }
    }
  };

  const userEditReview = async (
    review: IReview,
    movieId: string | undefined,
    setTargetReviews: React.Dispatch<React.SetStateAction<IReview[] | undefined>>,
    targetReviews:IReview[]| undefined

  ) => {
    const token = localStorage.getItem("@KenzieMovie:Token");

    try {
      const { data } = await api.put(`/reviews/${movieId}`, review, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if(targetReviews){
        const filterReviews = targetReviews?.filter( element => element.id !== data.id)
        setTargetReviews([...filterReviews, data])
      }
      toast.success("Review atualizada!", {
        toastId: 6
      });
    } catch (error) {
      
      toast.error("Review não atualizada", {
        toastId: 7
      });
    }
  };

  const userDeleteReview = async (movieId: string, setTargetReviews:React.Dispatch<React.SetStateAction<IReview[] | undefined>>) => {
    const token = localStorage.getItem("@KenzieMovie:Token");
    try {
      
      await api.delete(`/reviews/${movieId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTargetReviews([])
      toast.success("Review deletada", {
        toastId: 8
      });
    } catch (error) {
      toast.error("error ao deletar", {
        toastId: 9
      });
    }
  };

  const registerNewuser = async (data: TypeResgisterFormValue) => {
    try {
      setLoading(true);
      await api.post("/users", data);
      toast.success("Usuario cadastrado", {
        toastId: 10
      });
      navigate("/login");
    } catch (error) {
      toast.error("Usuario não cadastrado", {
        toastId: 11
      });
    } finally {
      setLoading(false);
    }
  };

  const getAllUsers = async () => {
    try {
      const { data } = await api.get<IUserName[]>("/users");
      setAllUsers(data);
    } catch (error) {

    }
  };
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
        setIsEditModal,
        getAllUsers,
        allUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

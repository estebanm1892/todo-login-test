import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./logout";

export const Profile = () => {
  const { user, isLoading, getAccessTokenSilently } = useAuth0();
  const [localUser, setLocalUser] = useState(null); // Estado local para el usuario

  useEffect(() => {
    const obtenerTokenYGuardarUsuario = async () => {
      if (user) {
        try {
          const token = await getAccessTokenSilently();
          const userData = {
            picture: user.picture,
            name: user.name,
            email: user.email,
            token,
          };
          localStorage.setItem("user", JSON.stringify(userData));
          setLocalUser(userData); // Actualiza el estado local con los datos del usuario
          console.log("Usuario asignado a local");
        } catch (e) {
          console.error(e);
        }
      }
    };

    obtenerTokenYGuardarUsuario();
  }, [user, getAccessTokenSilently]);

  // Usar useEffect para actualizar el estado local cuando el componente se monta
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData) {
      setLocalUser(userData);
    }
  }, []);

  if (isLoading) {
    return (
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <li className="mr-6">
          <h2>Loading...</h2>
        </li>
      </ul>
    );
  }

  return (
    localUser && (
      <ul
        className="flex flex-col mb-4 md:p-0 mt-4 font-medium border 
        border-gray-100 rounded-lg 
        bg-gray-50 md:space-x-8 
        rtl:space-x-reverse 
        md:flex-row 
        md:mt-0 md:border-0 md:bg-white 
        dark:bg-gray-800 
        md:dark:bg-gray-900 
        dark:border-gray-700 items-center"
      >
        <li className="flex-4 hidden lg:block">
          <img
            className="image-login"
            src={localUser.picture}
            alt={localUser.name}
          />
        </li>
        <li className="flex-4 hidden lg:block">
          <h2>{localUser.name}</h2>
        </li>
        <li className="flex-4 hidden lg:block">
          <p>{localUser.email}</p>
        </li>
        <li className="flex-4">
          <LogoutButton />
        </li>
      </ul>
    )
  );
};

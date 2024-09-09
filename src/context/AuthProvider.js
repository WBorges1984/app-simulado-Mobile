import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  // Função para salvar os dados do usuário após o login
  const login = (dadosUsuario) => {
    setUserData(dadosUsuario);
  };

  return (
    <AuthContext.Provider value={{ userData, login }}>
      {children}
    </AuthContext.Provider>
  );
};
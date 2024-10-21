import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [testMinutes, setTestMinutes] = useState(0);

  // Função para salvar os dados do usuário após o login
  const login = (dadosUsuario) => {
    setUserData(dadosUsuario);
  };

  const minutesTest = (minutes) =>{
    setTestMinutes(minutes + 1)
  }

  return (
    <AuthContext.Provider value={{ userData, login, testMinutes, minutesTest }}>
      {children}
    </AuthContext.Provider>
  );
};
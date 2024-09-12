// src/services/api.js

import { Alert } from "react-native";

//const BASE_URL = 'http://192.168.1.5:8082/v1';  
 const BASE_URL = 'http://10.1.1.101:8082/v1';  

// Função GET
export const apiGet = async (endpoint) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`Erro HTTP! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro na requisição GET:', error);
    throw error;
  }
};

// Função POST
export const apiPost = async (endpoint, body) => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
      
    });
    
    if (!response.ok) {
      // Para requisições que não foram bem-sucedidas, lançamos um erro
      throw new Error(`Erro HTTP! status: ${response.status}`);
      
    }
    const data = await response.json();
    return data;

  } catch (error) {
    console.log('Erro na requisição POST:', error);
    throw error;
  }
};

// Você pode adicionar funções para PUT, DELETE, etc. da mesma forma.

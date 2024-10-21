// src/services/api.js
import { BASE_URL } from '@env';

// const BASE_URL = 'http://192.168.1.5:8082/v1';  
 const URL = BASE_URL;  


// Função GET
export const apiGet = async (endpoint) => {
  
  try {
    const response = await fetch(`${URL}${endpoint}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!response.ok) {
      throw new Error(`Erro HTTP! status: ${response.status}`);
    }
    let data  = null;
    if(response.status == 204){
      data = 0
    }else{
      data = await response.json();
    }
    
    return data;
  } catch (error) {
    
    console.error('Erro na requisição GET:', error);
    throw error;
  }

};

// Função POST
export const apiPost = async (endpoint, body) => {
  try {
    const response = await fetch(`${URL}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      // Lançar um erro com o status e a resposta do servidor
      const errorMessage = await response.text(); // Caso a resposta tenha alguma mensagem de erro
      throw new Error(`Erro HTTP! status: ${response.status}, mensagem: ${errorMessage}`);
    }

    // Tentar converter para JSON apenas se a resposta for JSON
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Resposta não está em formato JSON');
    }
  } catch (error) {
    console.error(' Erro na requisição POST:', error);
    throw error; // Repassar o erro para ser tratado fora da função
  }
};

// Função PUT
export const apiPut = async (endpoint, body) => {
  try {
    
    const response = await fetch(`${URL}${endpoint}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    if (!response.ok) {
      // Lançar um erro com o status e a resposta do servidor
      const errorMessage = await response.text(); // Caso a resposta tenha alguma mensagem de erro
      throw new Error(`Erro HTTP! status: ${response.status}, mensagem: ${errorMessage}`);
    }

    // Tentar converter para JSON apenas se a resposta for JSON
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Resposta não está em formato JSON');
    }
  } catch (error) {
    console.error('Erro na requisição PUT:', error);
    throw error; // Repassar o erro para ser tratado fora da função
  }
};


// Função DELETE
export const apiDelete = async (tableName) => {
  try {
    const response = await fetch(`${URL}/v1/truncate`, {
      method: 'DELETE', // Usando DELETE aqui
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tableName }), // Passando o nome da tabela no corpo
    });

    if (!response.ok) {
      const errorMessage = await response.text(); // Mensagem de erro do servidor
      throw new Error(`Erro HTTP! status: ${response.status}, mensagem: ${errorMessage}`);
    }

    // Verifica se a resposta é JSON
    const contentType = response.headers.get('content-type');
    if (contentType && contentType.includes('application/json')) {
      const data = await response.json();
      return data; // Retorna os dados recebidos
    }

    // Mensagem de sucesso se não houver dados JSON
    return { message: 'Tabela deletada com sucesso', status: response.status };
  } catch (error) {
    console.error('Erro na requisição DELETE:', error);
    throw error; // Repassar o erro para ser tratado fora da função
  }
};

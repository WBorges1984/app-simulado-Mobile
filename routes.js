import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Inicial from "./src/pages/inicial/Inicial";
import Login from "./src/pages/Login/Login";
import Cadastro from "./src/pages/cadastro/Cadastro";
import ValidacaoEmail from "./src/pages/cadastro/validacao/validacaoEmail";
import InicialLogado from "./src/pages/inicialLogado/InicialLogado";
import Resultado from "./src/pages/resultado/resultado";


const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Resultado" component={Resultado}
          options={{
            headerShown: false,
          }}
        />
        
        <Stack.Screen name="Inicial" component={Inicial}
          options={{
            headerShown: false,
          }}
        />
        
        <Stack.Screen name="Login" component={Login}
          options={{
            headerShown: false,
          }}
        />
        
        <Stack.Screen name="Cadastro" component={Cadastro}
          options={{
            headerShown: false,
          }}
        />
        
        <Stack.Screen name="ValidacaoEmail" component={ValidacaoEmail}
          options={{
            headerShown: false,
          }}
        />
        
        <Stack.Screen name="InicialLogado" component={InicialLogado}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Buscar from './screens/Buscar';
import ContrasenaSeguridadCambio from './screens/Contrasena_de_seguridad_del_cambio';
import Home from './screens/Home';
import Login from './screens/Login';
import NuevaContrasena from './screens/NuevaContraseña';
import Salones from './screens/Salones';
import SalonesFiltrado from './screens/SalonesFiltrado';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="HomeTab" component={Home} />
        <Stack.Screen name="SalonesTab" component={Salones} />
        <Stack.Screen name="SalonesMain" component={Salones} />
        <Stack.Screen name="SalonesFiltrado" component={SalonesFiltrado} />
        <Stack.Screen name="Buscar" component={Buscar} />
        <Stack.Screen name="ContrasenaSeguridad" component={ContrasenaSeguridadCambio} />
        <Stack.Screen name="NuevaContrasena" component={NuevaContrasena} />
 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
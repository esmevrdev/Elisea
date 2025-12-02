/*import { useNavigation } from '@react-navigation/native';
import Login from '../../pages/Login';

export default function Index() {
  const navigation = useNavigation();
  return <Login />;
}*/

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

// Importa tus pantallas
import Home from '../../screens/Home';
import Login from '../../screens/Login';
import Salones from '../../screens/Salones';
import SalonesFiltrado from '../../screens/SalonesFiltrado';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: '#FFFFFF' },
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={Login}
        />

        <Stack.Screen 
          name="Home" 
          component={Home}
        />
      
        <Stack.Screen 
          name="Salones" 
          component={Salones}
        />
        
        <Stack.Screen 
          name="SalonesFiltrado" 
          component={SalonesFiltrado}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//CAMBIO DE CONTRASEÑA
/*import { useState } from 'react';
import Contraseña_de_seguridad_del_cambio from '../../pages/Contrasena_de_seguridad_del_cambio';
import NuevaContraseña from '../../pages/NuevaContraseña';

export default function Index() {
const [step, setStep] = useState(1);

if (step === 1) {
     return (
       <Contraseña_de_seguridad_del_cambio onContinue={() => setStep(2)} />
     );
   }

   return <NuevaContraseña />;
}
   */

/* FILTRADO

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Filtrado from '../../pages/Filtrado';

export default function Index() {
  const navigation = useNavigation();
  return <Filtrado />;
}
  */

/* LUPA
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import CatalogosScreen from '../../pages/Lupa';

export default function Index() {
  const navigation = useNavigation();
  return <CatalogosScreen navigation={navigation}  />;
}
  */

/* SALONES
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Salones from '../../pages/Salones';

export default function Index() {
  const navigation = useNavigation();
  return <Salones route={{ params: undefined }} />;
}
  */

/* PRUEBA

import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Salones from '../../pages/Salones';

export default function Index() {
  const navigation = useNavigation();
  return <Salones route={{ params: undefined }} />;
}

*/

/*import { createStackNavigator } from '@react-navigation/stack';
import Salones from '../../pages/Salones';
import SalonesFiltrado from '../../pages/SalonesFiltrado';

const Stack = createStackNavigator();

export default function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Salones" component={Salones} />
        <Stack.Screen name="Filtrado" component={SalonesFiltrado} />
      </Stack.Navigator>
  );
}
  */

/* <Stack.Screen name="DetallesSalon" component={DetallesSalon} /> */

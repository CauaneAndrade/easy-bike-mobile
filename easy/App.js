import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
// import { getUserLogin } from './src/config/api';
import Login from "./src/pages/Auth/Login";
import BicicletaList from "./src/pages/BicicletaList";
import BicicletaNew from "./src/pages/BicicletaNew";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// const SettingsStack = createNativeStackNavigator();
// async function Perfil() {
//   return (
//     <SettingsStack.Navigator>
//       {userLogado && <SettingsStack.Screen component={Login} />}
//       {!userLogado && (
//         <SettingsStack.Screen
//           name="Login"
//           component={Login}
//           options={{
//             headerShown: false,
//           }}
//         />
//       )}
//     </SettingsStack.Navigator>
//   );
// }

const Tab = createBottomTabNavigator();

export default function App() {
  const [user, setUser] = useState({});  

  useEffect(() => {
    async function fetchData() {
      // const userLogedIn = await getUserLogin();
      // setUser(userLogedIn);
      console.log('');
    }
    fetchData();
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: true, headerTintColor: "#1a8cff" }}
      >
        <Tab.Screen
          name="Listagem de Bicicletas"
          children={(navigation) => (
            <BicicletaList
              navigation={navigation}
              user={user}
            />
          )}
        />
        <Tab.Screen
          name="Cadastrar bicicleta"
          children={(navigation) => (
            <BicicletaNew
              navigation={navigation}
            />
          )}
        />
        <Tab.Screen
          name="Perfil"
          children={(navigation) => <Login navigation={navigation} />}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

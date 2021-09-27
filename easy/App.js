import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import Login from "./src/pages/Auth/Login";
import BicicletaList from "./src/pages/BicicletaList";

const SettingsStack = createNativeStackNavigator();

const API_URL = "http://192.168.0.2:8000/api/users/";

const userLogado = false;

async function Perfil() {
  return (
    <SettingsStack.Navigator>
      {userLogado && <SettingsStack.Screen component={Login} />}
      {!userLogado && (
        <SettingsStack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
      )}
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const [user, setUser] = useState({});
  const [categoria, setCategoria] = useState('');

  useEffect(() => {
    async function fetchMyAPI() {
      let response = await fetch(API_URL);
      response = await response.json();
      setUser(response[0]);
    }

    fetchMyAPI();
    console.log("---1-");
    console.log(user);
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: true, headerTintColor: "#1a8cff" }}
      >
        <Tab.Screen
          name="Buscar bicicleta"
          children={(navigation) => (
            <BicicletaList
              navigation={navigation}
              userLogado={userLogado}
              user={user}
            />
          )}
        />
        <Tab.Screen name="Perfil" component={Perfil} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

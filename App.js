import * as React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


import HomeView from './src/pages/Home';
import Agenda from './src/pages/Agenda';
import Profile from './src/pages/Profile';
import Feed from './src/pages/Feed';
import LocaisPesquisa from './src/pages/LocaisPesquisa';
import Buscando from './src/pages/Buscando';

const homeSvg = require('./src/img/home.png');
const calendarSvg = require('./src/img/calendar.png');
const userSvg = require('./src/img/user.png');

const Tab = createBottomTabNavigator();

const { Navigator, Screen } = createStackNavigator();

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://68.183.30.133/',
  cache: new InMemoryCache(),
  defaultOptions: { watchQuery: { fetchPolicy: 'cache-and-network' } },
});

function TabBar() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === 'HomeView') {
            return <Image style={{ width: 30, height: 30, marginLeft: 15, justifyContent: 'center' }} source={homeSvg} />
          } else if (route.name === 'Agenda') {
            return <Image style={{ width: 30, height: 30, marginLeft: 15, justifyContent: 'center' }} source={calendarSvg} />
          } else if (route.name === 'Profile') {
            return <Image style={{ width: 30, height: 30, marginLeft: 15, justifyContent: 'center' }} source={userSvg} />
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        showLabel:false,
      }}
    >
      <Tab.Screen name="HomeView" component={HomeView} />
      <Tab.Screen name="Agenda" component={Agenda} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Feed" component={Feed} options={{ tabBarBadge: 3 }} />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="TabBar" component={TabBar} />
          <Screen name="Home" component={HomeView} />
          <Screen name="Buscando" component={Buscando} />
          <Screen name="LocaisPesquisa" component={LocaisPesquisa}
          />
        </Navigator>
      </NavigationContainer>
    </ApolloProvider >
  );
}
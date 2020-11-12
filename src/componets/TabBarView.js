import React from 'react';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '../pages/Home';
import Agenda from '../pages/Agenda';
import Profile from '../pages/Profile';
import Feed from '../pages/Feed';

const homeSvg = require('../img/home.png');
const calendarSvg = require('../img/calendar.png');
const userSvg = require('../img/user.png');

const Tab = createBottomTabNavigator();


export default function TabBarView() {
    return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        if (route.name === 'Home') {
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
                }}
            >
                <Tab.Screen name="HomeView" component={Home} />
                <Tab.Screen name="Agenda" component={Agenda} />
                <Tab.Screen name="Profile" component={Profile} />
                <Tab.Screen name="Feed" component={Feed} options={{ tabBarBadge: 3 }} />
            </Tab.Navigator>
    )
}


<<<<<<< HEAD
import { View, Text, Image } from 'react-native';
import { Tabs, Redirect } from 'expo-router';
import { icons } from '../../constants';

const TabIcon=({icon,color,name,focused})=>{
  return(
    <View className="items-center justify-center gap-2">
      <Image 
=======
import { View, Text, Image} from 'react-native';
import { Tabs, Redirect } from 'expo-router';
import {icons} from '../../constants';
import React from 'react'

const TabIcon = ({icon, color, name, focused}) =>{
  return (
    <View>
      <Image
>>>>>>> d5f7a298a8f4cfd9e1c6b83b1d3e43612d444527
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
<<<<<<< HEAD
      <Text className={`${focused ? 'font-semibold':'font-pregular'} text-xs`} style={{color:color}}>
=======
      <Text className={`${focused ? 'font-psemibold' :
        'font-pregular'}`}>
>>>>>>> d5f7a298a8f4cfd9e1c6b83b1d3e43612d444527
        {name}
      </Text>
    </View>
  )
}

const TabsLayout = () => {
  return (
    <>
<<<<<<< HEAD
      <Tabs
        screenOptions={{
          tabBarShowLabel:false,
          tabBarActiveTintColor:'#FFA001',
          tabBarInactiveTintColor:'#CDCDE0',
          tabBarStyle:{
            backgroundColor:'#161622',
            borderTopWidth:1,
            borderTopColor:'#232533',
            height:84
          }
        }}
      >
        <Tabs.Screen 
        name='home'
        options={{
          title:'Home',
          headerShown:false,
          tabBarIcon:({color,focused}) =>(
            <TabIcon 
=======
    <Tabs>
      <Tabs.Screen 
      name='home'
      options={{
        title:'Home',
        headerShown: false,
        tabBarIcon: ({color , focused }) =>(
          <TabIcon
>>>>>>> d5f7a298a8f4cfd9e1c6b83b1d3e43612d444527
            icon={icons.home}
            color={color}
            name="Home"
            focused={focused}
<<<<<<< HEAD
            />
          )
        }}/>
                <Tabs.Screen 
        name='bookmark'
        options={{
          title:'Bookmark',
          headerShown:false,
          tabBarIcon:({color,focused}) =>(
            <TabIcon 
            icon={icons.bookmark}
            color={color}
            name="Bookmark"
            focused={focused}
            />
          )
        }}/>
                <Tabs.Screen 
        name='create'
        options={{
          title:'Create',
          headerShown:false,
          tabBarIcon:({color,focused}) =>(
            <TabIcon 
            icon={icons.plus}
            color={color}
            name="Create"
            focused={focused}
            />
          )
        }}/>
                <Tabs.Screen 
        name='profile'
        options={{
          title:'Profile',
          headerShown:false,
          tabBarIcon:({color,focused}) =>(
            <TabIcon 
            icon={icons.profile}
            color={color}
            name="Profile"
            focused={focused}
            />
          )
        }}/>
      </Tabs>
=======
          />
        )
      }}
      />
    </Tabs>
>>>>>>> d5f7a298a8f4cfd9e1c6b83b1d3e43612d444527
    </>
  )
}

export default TabsLayout
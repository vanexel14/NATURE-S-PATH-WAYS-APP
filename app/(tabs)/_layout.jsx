import { View, Image } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color, size = 24, focused }) => {
    return (
        <View style={{ width: size, height: size, justifyContent: 'center', alignItems: 'center' }}>
            <Image
                source={icon}
                style={{
                    width: size,
                    height: size,
                    tintColor: color,
                }}
                resizeMode="contain"
            />
        </View>
    );
};

const TabLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                name="home"
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.home}
                            color={color}
                            size={30} 
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="bill"
                options={{
                    title: 'Bill',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.bill}
                            color={color}
                            size={30}
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.profile}
                            color={color}
                            size={30}
                            focused={focused}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: 'Explore',
                    headerShown: false,
                    tabBarIcon: ({ color, focused }) => (
                        <TabIcon
                            icon={icons.searchbar}
                            color={color}
                            size={30}
                            focused={focused}
                        />
                    ),
                }}
            />
        </Tabs>
    );
};

export default TabLayout;

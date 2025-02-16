import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions = {{
                tabBarActiveTintColor: '#3a5a40',
                headerStyle: {
                    backgroundColor: '#dad7cd',
                },
                headerShadowVisible: false,
                headerTintColor: '#3a5a40',
                tabBarStyle: {
                    backgroundColor: '#dad7cd'
                },
            }}
        >
            <Tabs.Screen 
                name="index" 
                options = {{ 
                    title: 'Home', 
                    tabBarIcon: ({ color, focused}) => (
                        <Ionicons name={focused? 'home-sharp' : 'home-outline'} color={color} size={24} />
                    ),
                }} />
            <Tabs.Screen 
                name="events" 
                options = {{ 
                    title: 'Events', 
                    tabBarIcon: ({color, focused } ) => (
                        <Ionicons name={focused ? 'calendar-clear-sharp' : 'calendar-clear-outline'} color={color} size={24} />
                    ),
                }} />
            <Tabs.Screen 
                name="profile" 
                options = {{ 
                    title: 'Profile', 
                    tabBarIcon: ({color, focused } ) => (
                        <Ionicons name={focused ? 'person-circle-sharp' : 'person-circle-outline'} color={color} size={24} />
                    ),
                }} />
 
        </Tabs>
    );
}
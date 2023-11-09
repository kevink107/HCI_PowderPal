import { Text, View, ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SearchInterface from './search/SearchInterface';

function Home() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', }}>
        <ImageBackground source={require('./assets/home.png')} style={{width: '100%', height: '100%' }}>
        </ImageBackground>
      </View>
    );
  }
  
  function Profile() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <ImageBackground source={require('./assets/profile.png')} style={{ width: '100%', height: '100%' }}>
        </ImageBackground>
      </View>
    );
  }
  
  function Feed() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <ImageBackground source={require('./assets/feed.png')} style={{ width: '100%', height: '100%' }}>
        </ImageBackground>
      </View>
    );
  }
  
  function Search() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
        <SearchInterface />
      </View>
    );
  }
  
  const Tab = createBottomTabNavigator();
  
  export default function MyTabs() {
    return (
      <Tab.Navigator
        screenOptions={{tabBarActiveTintColor: '#ffffff',
                        tabBarInactiveTintColor: '#01497C', 
                        tabBarActiveBackgroundColor: '#01497C',
                        tabBarInactiveBackgroundColor: '#ffffff' }} >
        <Tab.Screen 
          name="Home" 
          component={Home}
          options={{
            tabBarLabel: 'Home',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}/>
        <Tab.Screen 
          name="Feed" 
          component={Feed} 
          options={{
            tabBarLabel: 'Feed',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="ski" color={color} size={size} />
            ),
          }}/>
        <Tab.Screen 
          name="Search" 
          component={Search} 
          options={{
            tabBarLabel: 'Search',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="magnify" color={color} size={size} />
            ),
          }}/>
        <Tab.Screen 
          name="Profile" 
          component={Profile} 
          options={{
            tabBarLabel: 'Profile',
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account-circle" color={color} size={size} />
            ),
          }}/>
        
      </Tab.Navigator>
    );
  }
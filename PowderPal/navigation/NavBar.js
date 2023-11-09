import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../Home';
import Profile from '../Profile';
import Feed from '../Feed';
import Search from '../Search';

const Tab = createBottomTabNavigator();

function NavBar() {
  return (
    <NavigationContainer screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
        <Tab.Screen name="Profile" component={Profile} options={{headerShown: false}}/>
        <Tab.Screen name="Feed" component={Feed} options={{headerShown: false}}/>
        <Tab.Screen name="Search" component={Search} options={{headerShown: false}}/>
    </NavigationContainer>
  );
}

export default NavBar;

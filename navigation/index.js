import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Quiz from '../screens/quiz';
import Submit from '../screens/submit';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home"
          component={Home}
        />
        {/* </Stack.Screen> */}
        <Stack.Screen
          name="Quiz"
          component={Quiz}
        />
        <Stack.Screen name="Result" component={Submit} />
      </Stack.Navigator>
      </NavigationContainer>

  );
};
export default MyStack;
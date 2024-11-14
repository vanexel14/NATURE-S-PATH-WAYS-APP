  import React from 'react'
  import { SplashScreen, Stack } from 'expo-router'
  import { useFonts } from 'expo-font'
  import { useEffect } from 'react'

  SplashScreen.preventAutoHideAsync();

  const Mainlayout = () => {

    const [fontsLoaded, error] = useFonts({
      "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
      "Roboto-Bold": require("../assets/fonts/Roboto-Bold.ttf"),
      "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
      "Roboto-Medium": require("../assets/fonts/Roboto-Medium.ttf"),
      "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
      "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
    });
    
    useEffect(() => {
      if (error) throw error;
    
      if (fontsLoaded) {
        SplashScreen.hideAsync();
      }
    }, [fontsLoaded, error]);
    
    if (!fontsLoaded && !error) {
      return null;
    }
    








    return (
      <Stack>
          <Stack.Screen 
          name="index"
          options={{
              headerShown:false
          }}
          />
      </Stack>

    )
  }

  export default Mainlayout


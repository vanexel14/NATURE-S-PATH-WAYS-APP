import { StatusBar } from 'expo-status-bar';
import { Text, ImageBackground, View } from 'react-native';
import { Link } from 'expo-router';
import { styled } from 'nativewind';

const StyledImageBackground = styled(ImageBackground);

export default function App() {
  return (
    <StyledImageBackground
      source={require('../assets/images/earth.png')}
      className="flex-1 justify-center items-center"
      resizeMode="cover"
    >
      <View className="flex-1 justify-center items-center px-4">
        <Text className="text-5xl font-extrabold text-white mb-6 text-center leading-tight">
        Nature's Pathways
        </Text>
        <Text className="text-3xl text-green-500 mb-20 text-center leading-normal">
        - Embrace Nature and Make a Difference -
        </Text>
        <Text className="text-lg font-normal text-white text-center mb-3 px-100 leading-relaxed">
        "Discover the wonders of the natural world with Nature’s Pathways: Embark on Your Adventure of Exploration. From majestic forests to serene lakes, this guide takes you through breathtaking landscapes and hidden gems. Perfect for all explorers, our detailed maps and expert tips will help you experience nature’s beauty and diversity. Lace up your boots and set out on an unforgettable journey that will inspire and refresh your spirit."
        </Text>
        <Link href="/home" className="text-lg text-white bg-slate-500 px-8 py-2 my-3 rounded-xl text-center">
          Home
        </Link>
        <Link href="/registration" className="text-lg text-white bg-slate-500 px-8 py-2 rounded-xl text-center">
          Sign up
        </Link>
      </View>

      <StatusBar style="auto" />
    </StyledImageBackground>
  );
}

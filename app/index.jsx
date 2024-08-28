import { Image,ScrollView,Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants';
import CustomButton from '../components/CustomButton';
import { useGlobalContext } from '../context/GlobalProvider';

export default function App(){
  const {isLoading, isLoggedIn} = useGlobalContext();
  
    if(!isLoading && isLoggedIn) return <Redirect href='/home'/>
  return(
    <SafeAreaView className="bg-white h-full">
      <ScrollView contentContainerStyle={{height:'100%'}}>
      <View className="w-full flex justify-center items-center min-h[85vh] px-4">
          <Image
            source={images.logo}
            className="w-[140px] h-[100px]"
            resizeMode="contain"
          />

          <Image
            source={images.cards}
            className="max-w-[380px] w-full h-[298px] "
            resizeMode="contain"
          />

          <View className="relative mt-1">
            <Text className="text-3xl text-black font-bold text-center">
               Ingresa a nuestra nueva App{" "}
              <Text className="text-secondary-200">QuimiApp</Text>
            </Text>


          </View>
          <Text className="text-sm font-pregular text-black mt-7 text-center">
            Descubre la gran variedad de productos para el hogar que tenemos para ti
          </Text>
          <CustomButton 
            title="Ingresa con tu correo"
            handlePress={() => router.push('/sign-in')}
            containerStyles="w-full mt-7"
            
          />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622'
      style='light'/>
    </SafeAreaView>
  )
}

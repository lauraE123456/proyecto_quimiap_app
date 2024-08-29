import { View, Text, ScrollView, Image, Alert} from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import CustomButton from '../../components/CustomButton'
import FormField from '../../components/FormField'
import { Link, router } from 'expo-router'

import { createUser } from '../../lib/appwrite'


const SignUp = () => {

  const [form, setForm] = useState({
    username:'',
    email:'',
    password:''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = async () =>{
    if(!form.username || !form.email || !form.password){
      Alert.alert('Error','Please fill in all the fields');
    }

    setIsSubmitting(true);

    try{  
      const result = await createUser(form.email,form.password, form.username);
      setUser(result);
      setIsLogged(true);
        
      router.replace('/home');
    } catch (error){
      Alert.alert('Error',error.message);
    }finally{
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[83vh] px-4 my-6">
          <Image 
          source={images.logo} 
          resizeMode="contain"
          className="w-[120px] h-[125px]"
          />

          <Text className="text-2xl text-black text-semibold mt-1 font-semibold">Registrate en QuimiApp</Text>
          
          <FormField 
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form,
              username: e})}
            otherStyles="mt-10"
          />

          <FormField 
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form,
              email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField 
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form,
              password: e})}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Sign Up"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-black font-pregular" >
                Ya tienes una cuenta? 
              </Text>
              <Link href="/sign-in" className="text-lg font-pregular text-secondary-100">Sign In</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

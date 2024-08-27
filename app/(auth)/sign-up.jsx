import { View, Text, ScrollView, Image } from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {images} from '../../constants'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const SignUp = () => {

  const [form, setForm] = useState({
    username:'',
    email:'',
    password:''
  }
  )

  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () =>{

  }

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
            title="Nombre"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form,
              username: e})}
            otherStyles="mt-10"
          />

          <FormField 
            title="Correo Electronico"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form,
              email: e})}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField 
            title="Contraseña"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form,
              password: e})}
            otherStyles="mt-7"
          />

          <CustomButton
            title="Registrarme"
            handlePress={submit}
            containerStyles="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-black font-pregular" >
                Ya tienes una cuenta? 
              </Text>
              <Link href="/sign-in" className="text-lg font-pregular text-secondary-100">Ingresa</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp

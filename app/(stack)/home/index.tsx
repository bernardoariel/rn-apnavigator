import CustomButton from '@/components/shared/CustomButton'
import { Link, router } from 'expo-router'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


const HomeScreen = () => {
  return (
    <SafeAreaView className='px-10 mt-5'>
      <View>
        
        <CustomButton 
          className='mb-2' 
          color="primary"
          onPress={ ()=> router.push('/products')}
          >
            Productos
        </CustomButton>
        <CustomButton
         className='mb-2' 
         color="secondary"
         onPress={ ()=> router.push('/profile')}
         >
          Profile
        </CustomButton>
        <CustomButton
         className='mb-2' 
         color="tertiary"
         onPress={ ()=> router.push('/settings')}
         >
          Ajustes
        </CustomButton>
      <Link href="/products" asChild>
          <CustomButton variant='text-only' className='mb-10' color='primary'>Productos</CustomButton>
        </Link>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
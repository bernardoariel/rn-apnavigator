import { Stack } from 'expo-router'
import { View, Text } from 'react-native'

const StackLayout = () => {
 return (
    <Stack>
        <Stack.Screen 
            name='home/index'
            options={{
                title:'Inicio'
            }}
        />
        <Stack.Screen 
            name='products/index'
            options={{
                title:'Productos'
            }}
        />
        <Stack.Screen 
            name='profile/index'
            options={{
                title:'Perfil'
            }}
        />
        <Stack.Screen 
            name='settings/index'
            options={{
                title:'Ajustes Pantalla'
            }}
        />
    </Stack>
 )
  
}

export default StackLayout
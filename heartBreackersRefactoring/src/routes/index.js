import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../pages/Login'
import SignUp from '../pages/Signup';
import Search from '../pages/Search';

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
    <Stack.Navigator>
        <Stack.Screen
            name="Login"
            component={Login}
        />
        <Stack.Screen
            name="Cadastro"
            component={SignUp}
        />
        <Stack.Screen
            name="Pesquisa"
            component={Search}
        />
    </Stack.Navigator>
    )
}
// Componente de redirecionamento

// Importando componentes
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// Importando as telas
import Landing from '../pages/Landing'
import LoginScreen from '../pages/Login'
import Main from '../pages/Main';
import Search from '../pages/Search';
import SignUp from '../pages/Signup';
import ProntuarioFicha from '../pages/Prontuario/fichaProntuario';
import PageMedicines from '../pages/Medicamentos/Medicamentos'

const Stack = createNativeStackNavigator();

export default function Routes(){
    return(
    <Stack.Navigator>
        {/* As Stack.Screen são as telas a serem renderizadas*/}
        <Stack.Screen
            name="Landing"
            component={Landing}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="Main"
            component={Main}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="Search"
            component={Search}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="SignUp"
            component={SignUp}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="Prontuario"
            component={ProntuarioFicha}
            options={{headerShown: false}}
        />
        <Stack.Screen
            name="Medicamentos"
            component={PageMedicines}
            options={{headerShown: false}}
        />
    </Stack.Navigator>
    )
}
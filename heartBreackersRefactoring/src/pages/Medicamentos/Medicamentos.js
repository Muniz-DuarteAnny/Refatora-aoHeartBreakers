import { View, Text, TouchableOpacity, Image, ScrollView, SectionList } from "react-native";
import {css} from '../../Style/css';
import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import RNPickerSelect from 'react-native-picker-select';
import { useRoute } from '@react-navigation/native';
const PageMedicines = () => {
    const navigation = useNavigation();
    const [timer1, setTimer1] = useState('');
    const [timer2, setTimer2] = useState('');
    const route = useRoute();
    const { items } = route.params;


    const horaOpções = [
        {label: '00', value: '0'},
        {label: '01', value: '1'},
        {label: '02', value: '2'},
        {label: '03', value: '3'},
        {label: '04', value: '4'},
        {label: '05', value: '5'},
        {label: '06', value: '6'},
        {label: '07', value: '7'},
        {label: '08', value: '8'},
        {label: '09', value: '9'},
        {label: '10', value: '10'},
        {label: '11', value: '11'},
        {label: '12', value: '12'},
        {label: '13', value: '13'},
        {label: '14', value: '14'},
        {label: '15', value: '15'},
        {label: '16', value: '16'},
        {label: '17', value: '17'},
        {label: '18', value: '18'},
        {label: '19', value: '19'},
        {label: '20', value: '20'},
        {label: '21', value: '21'},
        {label: '22', value: '22'},
        {label: '23', value: '23'},
        {label: '24', value: '24'},
      ];

      const minutoOpções =[
        {label: '00', value: '0'},
        {label: '01', value: '1'},
        {label: '02', value: '2'},
        {label: '03', value: '3'},
        {label: '04', value: '4'},
        {label: '05', value: '5'},
        {label: '06', value: '6'},
        {label: '07', value: '7'},
        {label: '08', value: '8'},
        {label: '09', value: '9'},
        {label: '10', value: '10'},
        {label: '11', value: '11'},
        {label: '12', value: '12'},
        {label: '13', value: '13'},
        {label: '14', value: '14'},
        {label: '15', value: '15'},
        {label: '16', value: '16'},
        {label: '17', value: '17'},
        {label: '18', value: '18'},
        {label: '19', value: '19'},
        {label: '20', value: '20'},
        {label: '21', value: '21'},
        {label: '22', value: '22'},
        {label: '23', value: '23'},
        {label: '24', value: '24'},
        {label: '25', value: '25'},
        {label: '26', value: '26'},
        {label: '27', value: '27'},
        {label: '28', value: '28'},
        {label: '29', value: '29'},
        {label: '30', value: '30'},
        {label: '31', value: '31'},
        {label: '32', value: '32'},
        {label: '33', value: '33'},
        {label: '34', value: '34'},
        {label: '35', value: '35'},
        {label: '36', value: '36'},
        {label: '37', value: '37'},
        {label: '38', value: '38'},
        {label: '39', value: '39'},
        {label: '40', value: '40'},
        {label: '41', value: '41'},
        {label: '42', value: '42'},
        {label: '43', value: '43'},
        {label: '44', value: '44'},
        {label: '45', value: '45'},
        {label: '46', value: '46'},
        {label: '47', value: '47'},
        {label: '48', value: '48'},
        {label: '49', value: '49'},
        {label: '50', value: '50'},
        {label: '51', value: '51'},
        {label: '52', value: '52'},
        {label: '53', value: '53'},
        {label: '54', value: '54'},
        {label: '55', value: '55'},
        {label: '56', value: '56'},
        {label: '57', value: '57'},
        {label: '58', value: '58'},
        {label: '59', value: '59'},
      ];
    return (
        <View style={css.containerMedicines1}>
            <View style={css.containerMedicines2}>
                {items.map(item => (
                    <Text key={item.id} style={css.inputMedicine}>{item.texto}</Text>
                ))}
                <View style={css.medicinesInformacoes}>
                    <View style={css.TextMedicines}>
                        <Text style={css.colorFont}>Medicamentos:</Text>
                        <TextInput style={css.nameMedicines}></TextInput>
                    </View>
                    <View style={css.TextMedicines}>
                        <Text style={css.colorFont}>Periodo:</Text>
                        <View style={css.pickerMedicines}>
                            <View style={css.pickercss}>
                                <Text style={css.colorFont}>Hora: </Text>
                                <RNPickerSelect style={{
                                    inputAndroid: {
                                        borderColor: 'orange',
                                        borderWidth: 1,
                                        borderRadius: 2,
                                        paddingLeft: 3,
                                        backgroundColor: '#fff4a7',
                                        fontSize: 12,
                                        color: 'black',
                                      },
                                      inputIOS: {
                                        borderColor: 'orange',
                                        borderWidth: 1,
                                        borderRadius: 2,
                                        paddingLeft: 3,
                                        backgroundColor: '#fff4a7',
                                        fontSize: 12,
                                        color: 'black',
                                      },
                                }} 
                                placeholder={{ label: 'Selecione...', value: null}}
                                items={horaOpções}
                                onValueChange={(selectHora) => setTimer1(selectHora)}
                                value={timer1}/>
                            </View>
                            <View style={css.pickercss}>
                                <Text style={css.colorFont}>Minutos:</Text>
                                <RNPickerSelect style={{
                                    inputAndroid: {
                                        borderColor: 'orange',
                                        borderWidth: 1,
                                        borderRadius: 2,
                                        paddingLeft: 3,
                                        backgroundColor: '#fff4a7',
                                        fontSize: 12,
                                        color: 'black',
                                      },
                                      inputIOS: {
                                        borderColor: 'orange',
                                        borderWidth: 1,
                                        borderRadius: 2,
                                        paddingLeft: 3,
                                        backgroundColor: '#fff4a7',
                                        fontSize: 12,
                                        color: 'black',
                                      },
                                }} 
                                placeholder={{ label: 'Selecione...', value: null}}
                                items={minutoOpções}
                                onValueChange={(selectHora) => setTimer2(selectHora)}
                                value={timer2}/>
                            </View>
                        </View>
                    </View>
                    <View style={css.TextMedicines}>
                        <Text style={css.colorFont}>Evolução:</Text>
                        <TextInput style={css.nameMedicines}></TextInput>
                    </View>
                    <TouchableOpacity style={css.saveInformation}>
                        <Text style={ css.colorFontSave}>Salvar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexDirection: 'row',
                backgroundColor: 'red',
                alignItems: 'center',
                paddingTop: 18,
                width: '100%',
                height: '10%',
                position: 'absolute',
                bottom: 0,
                backgroundColor: '#DCDCDC',
                }}>
                <TouchableOpacity style={css.footerBtt} onPress={() => navigation.navigate('ficha')}>
                    <Text style={css.footerBttText}>
                        Voltar
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={css.footerBtt}>
                    <Text style={css.footerBttText}>
                        Excluir
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default PageMedicines;
import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, SectionList } from "react-native";
// import foto from '../../assets/perfil.png';
import { css } from '../../Style/css';
import React, { useState } from "react";
import { TextInputMask } from 'react-native-masked-text';
import RNPickerSelect from 'react-native-picker-select';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'; // Alteração na importação
import * as DocumentPicker from 'expo-document-picker';
import * as Permissions from 'expo-permissions';


const PacienteProntuario = () => {

    const navigation = useNavigation();
    const [queixa, setQueixa] = useState('');
    const [historico, setHistorico] = useState('');
    const [alergias, setAlergias] = useState('');
    const [cid, setCid] = useState('');
    const [exameF, setExamef] = useState('');
    const [conduta, setConduta] = useState('');
    const [hipoteseD, setHipotesed] = useState('');
    const [diagnostico, setDiagnostico] = useState('');
    const [pdfUri, setPdfUri] = useState(null); // Estado para armazenar a URI do arquivo PDF selecionado

    const handleProntuario = () => {
        // verificar as credenciais no servidor.
        console.log(queixa)
        console.log(historico)
        console.log(alergias)
        console.log(exameF)
        console.log(cid)
        console.log(conduta)
        console.log(hipoteseD)
        console.log(diagnostico)
    };
    const excluirProntuario = () => {
        setQueixa('');
        setHistorico('');
        setAlergias('');
        setCid('');
        setExamef('');
        setConduta('');
        setHipotesed('');
        setDiagnostico('');
    };
    const handleAttachment = async () => {
        
        try {
            // Solicitar permissão de acesso ao sistema de arquivos
            const { status } = await Permissions.askAsync(Permissions.MEDIA_LIBRARY);
    
            if (status !== 'granted') {
                // Se a permissão não for concedida, você pode lidar com isso aqui
                console.log('Permissão negada para acessar o sistema de arquivos.');
                return;
            }
    
            // Se a permissão for concedida, proceda com a seleção do documento
            const result = await DocumentPicker.getDocumentAsync({ type: 'application/pdf' });
    
            if (result.type === 'success') {
                setPdfUri(result.uri);
            }
        } catch (error) {
            console.log('Erro ao selecionar o PDF:', error);
        }
    };

    return (
        <ScrollView>
            <View style={css.containerMedicalRecord}>
                <View style={css.prontuarioDisplay}>
                    <Text style={css.recordTitle}>
                        PRONTUARIO
                    </Text>
                    <View style={css.containerNotes}>
                        <Text style={css.titleNotes}>Queixa Principal</Text>
                        <TextInput style={css.insertNotes}
                            multiline={true}
                            value={queixa}
                            onChangeText={(inputQueixa) => setQueixa(inputQueixa)} />
                        <Text style={css.titleNotes}>Histórico</Text>
                        <TextInput style={css.insertNotes}
                            multiline={true}
                            value={historico}
                            onChangeText={(inputHistorico) => setHistorico(inputHistorico)} />
                        <Text style={css.titleNotes}>Alergias</Text>
                        <TextInput style={css.insertNotes}
                            multiline={true}
                            value={alergias}
                            onChangeText={(inputAlergias) => setAlergias(inputAlergias)} />
                        <Text style={css.titleNotes}>CID</Text>
                        <TextInput style={css.insertNotes}
                            multiline={true}
                            value={cid}
                            onChangeText={(inputCid) => setCid(inputCid)} />
                        <Text style={css.titleNotes}>Exame Físico</Text>
                        <TextInput style={css.insertNotes}
                            multiline={true}
                            value={exameF}
                            onChangeText={(inputExamef) => setExamef(inputExamef)} />
                        <Text style={css.titleNotes}>Conduta</Text>
                        <TextInput style={css.insertNotes}
                            multiline={true}
                            value={conduta}
                            onChangeText={(inputConduta) => setConduta(inputConduta)} />
                        <Text style={css.titleNotes}>Hipótese de Diagnóstico</Text>
                        <TextInput style={css.insertNotes}
                            multiline={true}
                            value={hipoteseD}
                            onChangeText={(inputHipotesed) => setHipotesed(inputHipotesed)} />
                        <Text style={css.titleNotes}>Diagnóstico</Text>
                        <TextInput style={css.insertNotes}
                            multiline={true}
                            value={diagnostico}
                            onChangeText={(inputDiagnostico) => setDiagnostico(inputDiagnostico)} />




                        <Text style={css.titleNotes}>Resultado dos Exames</Text>
                        <TextInput style={css.insertNotes}
                            multiline={true} />



        
                        <TouchableOpacity style={[css.attachBtt, { marginBottom: 30 }]} onPress={handleAttachment}>
                            <Text style={css.attachBttText}>
                                Anexar arquivo
                            </Text>
                        </TouchableOpacity>
                        {pdfUri && (
                            <Text style={{ marginBottom: 10 }}>
                                Arquivo selecionado: {pdfUri}
                            </Text>
                        )}
                        
                    </View>
                </View>
                <View style={css.footerContainer}>
                    <TouchableOpacity style={css.footerBtt} onPress={handleProntuario}>
                        <Text style={css.footerBttText}>
                            Salvar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.footerBtt} onPress={() => navigation.navigate('ficha')}>
                        <Text style={css.footerBttText}>
                            Voltar
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={css.footerBtt} onPress={excluirProntuario}>
                        <Text style={css.footerBttText}>
                            Excluir
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>

    )
}


export default PacienteProntuario;
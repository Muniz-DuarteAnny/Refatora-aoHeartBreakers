import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import SQLite from 'react-native-sqlite-storage';

export default function App() {
  useEffect(() => {
    // Abre o banco de dados SQLite
    const db = SQLite.openDatabase(
      { name: 'heart_breakers.db', location: 'default' },
      () => {
        console.log('Banco de dados SQLite aberto com sucesso');

        // Execução dos comandos SQL em uma única transação
        db.transaction((tx) => {
          // Criação da tabela `doctor`
          tx.executeSql(
            `CREATE TABLE IF NOT EXISTS doctor (
              doctorId INTEGER PRIMARY KEY AUTOINCREMENT,
              cpf TEXT NOT NULL UNIQUE,
              password TEXT NOT NULL
            );`
          );

          // Inserção de dados na tabela `doctor`
          tx.executeSql(
            `INSERT INTO doctor (cpf, password) VALUES (?, ?);`,
            ['11111111111', '123'],
            (_, result) => {
              console.log('Dados inseridos na tabela "doctor" com sucesso');
            },
            (_, error) => {
              console.error('Erro ao inserir dados na tabela "doctor":', error);
            }
          );

          tx.executeSql(
            `INSERT INTO doctor (cpf, password) VALUES (?, ?);`,
            ['22222222222', '123'],
            (_, result) => {
              console.log('Dados inseridos na tabela "doctor" com sucesso');
            },
            (_, error) => {
              console.error('Erro ao inserir dados na tabela "doctor":', error);
            }
          );

          // Criação da tabela `patient`
          tx.executeSql(
            `CREATE TABLE IF NOT EXISTS patient (
              medical_record INTEGER PRIMARY KEY AUTOINCREMENT,
              photo BLOB,
              name TEXT,
              cpf TEXT UNIQUE,
              rg INTEGER,
              birth_date TEXT,
              address TEXT,
              cell INTEGER,
              weight REAL,
              height REAL,
              gender TEXT,
              blood_type TEXT,
              cid TEXT,
              complaint TEXT,
              disease_history TEXT,
              allergies TEXT,
              conduct TEXT,
              physical_state TEXT,
              exams BLOB,
              diagnostic_hypothesis TEXT,
              results TEXT
            );`
          );
        }, (error) => {
          console.error('Erro na transação SQL:', error);
        }, () => {
          console.log('Transação SQL concluída com sucesso');
        });
      },
      (error) => {
        console.error('Erro ao abrir o banco de dados SQLite:', error);
      }
    );
  }, []);

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#B22222" barStyle="light-content" />
      <Routes />
    </NavigationContainer>
  );
}

#Refatoração do projeto Hearth Breakers em React Native

##Como colaborar com o projeto?
1. Aceite o convite para se tornar um colaborador(a) no seu email
2. Crie uma pasta para clonar o repositório
3. Clique em '<> Code' e copie o código do repositório
4. Abra o GitHub Desktop, selecione Add e clone com o link do repositório / Ou abra o cmd no endereço da pasta criada e use o comando: git clone <https://github.com/Muniz-DuarteAnny/Refatora-aoHeartBreakers.git>
5. Abra o VS Code na pasta Refatora-aoHeartBreakers(Está pronto)
6. Abra o cmd na pasta Refatora-aoHeartBreakers e utilize estes comandos para baixar os pacotes:
    1. Navegação;

        npm install @react-navigation/native

        npm install @react-navigation/stack

        npm install @react-navigation/native-stack

    2. Execução;

        *Caso queira rodar no navegador(fica bugado pois não está responsivo)*
        npx expo install react-native-web@~0.19.6 react-dom@18.2.0 @expo/webpack-config@^19.0.0

    3. Animação;

        npx expo install react-native-animatable

    4. Dados;

        npm install sequelize

        *Não precisa*
        npx sequelize-cli init

        *Não precisa*
        npx sequelize-cli model:generate --name Doctor --attributes cpf:integer,password:string

        *Não precisa*
        npx sequelize-cli model:generate --name Patient --attributes "photo:BLOB,name:STRING,cpf:INTEGER,rg:INTEGER,birth_date:DATE,address:STRING,cell:STRING,weight:FLOAT,height:FLOAT,gender:STRING,blood_type:STRING,cid:STRING,complaint:STRING,disease_history:STRING,allergies:STRING,conduct:STRING,physical_state:STRING,exams:BLOB,diagnostic_hypothesis:STRING,results:STRING"

        *Não precisa*
        npx sequelize-cli db:migrate


    

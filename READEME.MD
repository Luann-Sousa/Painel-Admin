## PARA INICIA SEU PRJETO 
npm init OR npm init -y

### CRIANDO MEU PROPIO SERVIDOR Esta dependecia inicia um servidor.
npm install express --save


### PARA SE CONECTAR COM BANCO DE DADOS VAMOS USAR O SEQUELIZE E SEUS DRIVE PARA USAR SEU BANCO
npm install --save sequelize
npm install --save mysql2

### PARA CRIAR UM BANCO DE DADOS PELO SEQUELIZE
npm install --save-dev sequelize-cli

agora para criar um databese em nosso banco de dados temos que rodar o seguinte comando .

yarn seuquelize db:create ... antes disso temos que configurar nosso caminho .squelize

### PARA CRIAR UM DATABASE PELO SEQUELIZE
yarn sequelize migration:create --name=create-users


### PARA PODEMOS CRIAR UMA MIGRATION(TABELA) EM NOSSO SEQUELIZE USAMOS SEQUINTE COMANDO
yarn sequelize db:migrate




### PARA APAGA UM MIGRATION QUE CRIOR COM ALGUM CAMPO ERRADO

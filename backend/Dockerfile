# Usando a imagem base do Node.js
FROM node:20

# Definindo o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiando os arquivos de dependência para o container
COPY package*.json ./

# Instalando dependências
RUN npm install

# Copiando o conteúdo da pasta backend para o diretório de trabalho
COPY backend/ ./

# Copiando o arquivo server.js para o diretório de trabalho
COPY server.js ./

# Expondo a porta que sua aplicação usa
EXPOSE 4000

# Comando para iniciar a aplicação
CMD ["node", "server.js"]

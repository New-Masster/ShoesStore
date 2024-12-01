# Frontend Dockerfile
FROM node:18

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package.json package-lock.json /app/

# Instala as dependências do Node.js
RUN npm install

# Copia o restante do projeto
COPY . /app/

# Compila o frontend
RUN npm run build

# Expõe a porta do frontend
EXPOSE 3000

# Comando para rodar o servidor
CMD ["npm", "start"]

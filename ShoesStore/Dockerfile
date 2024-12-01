# Backend Dockerfile
FROM python:3.10-slim

# Define o diretório de trabalho no contêiner
WORKDIR /app

# Instala dependências do sistema
RUN apt-get update && apt-get install -y \
    libpq-dev gcc --no-install-recommends && \
    apt-get clean && rm -rf /var/lib/apt/lists/*

# Copia os arquivos de dependências
COPY requirements.txt /app/

# Instala as dependências do Python
RUN pip install --no-cache-dir -r requirements.txt

# Copia o projeto para o contêiner
COPY . /app/

# Expõe a porta do backend
EXPOSE 8000

# Comando para rodar o servidor
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

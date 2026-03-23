FROM node:20-slim

# Install dependencies for canvas/music if needed
RUN apt-get update && apt-get install -y \
    python3 \
    make \
    g++ \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

# We move the deploy command to the final execution 
# to ensure environment variables are available.
CMD ["sh", "-c", "npm run deploy && npm start"]

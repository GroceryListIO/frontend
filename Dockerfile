FROM node:6.9.1

EXPOSE 4200 49153

# Install and build frontend
RUN mkdir -p /app/frontend
WORKDIR /app/frontend
COPY . /app/frontend
RUN rm -rf ./node_modules && npm install -g @angular/cli  && npm install

# Start frontend
CMD ["ng", "--version"]
CMD ["npm","start"]

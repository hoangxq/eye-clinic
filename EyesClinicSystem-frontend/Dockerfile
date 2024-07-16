# syntax=docker/dockerfile:1.4

# Create image based on the official Node image from dockerhub
FROM node:lts-buster AS development

# Create app directory
RUN mkdir /EyesClinicSystem-frontend
WORKDIR /EyesClinicSystem-frontend

COPY package.json package-lock.json ./
RUN npm i

COPY . .

# Expose the port the app runs in
EXPOSE 3000

# Serve the app
CMD ["npm", "start"]

FROM development as dev-envs

RUN apt-get update && \
    apt-get install -y --no-install-recommends git

RUN useradd -s /bin/bash -m vscode && \
    groupadd docker && \
    usermod -aG docker vscode

# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /
CMD [ "npm", "start" ]
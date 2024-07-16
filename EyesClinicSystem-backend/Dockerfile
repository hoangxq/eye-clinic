# syntax=docker/dockerfile:1.4

FROM node:lts-buster-slim AS development

# Create app directory
RUN mkdir /EyesClinicSystem-backend
WORKDIR /EyesClinicSystem-backend

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]

FROM development as dev-envs

RUN apt-get update && \
    apt-get install -y --no-install-recommends git

RUN useradd -s /bin/bash -m vscode && \
    groupadd docker && \
    usermod -aG docker vscode

# install Docker tools (cli, buildx, compose)
COPY --from=gloursdocker/docker / /
CMD [ "npm", "start" ]
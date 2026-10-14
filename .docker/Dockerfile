# syntax=docker/dockerfile:1
# Etapas: img-dev (desarrollo / devcontainer) | deps → build → img-prod (nginx) | export (solo estáticos)
# El contexto de build es la raíz del proyecto (ver docker-compose.yml).

######## DESARROLLO ########
FROM node:22-bookworm-slim AS img-dev

ARG USER=node
ARG VOLUME=/app

RUN apt-get update \
    && apt-get install -y --no-install-recommends git openssh-client curl less procps ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# node_modules vive en un volumen con nombre; se crea con el dueño correcto
RUN mkdir -p $VOLUME/node_modules /commandhistory \
    && chown -R $USER:$USER $VOLUME /commandhistory

# Preserve bash history
RUN SNIPPET="export PROMPT_COMMAND='history -a' && export HISTFILE=/commandhistory/.bash_history" \
    && touch /commandhistory/.bash_history \
    && chown $USER /commandhistory/.bash_history \
    && echo "$SNIPPET" >> "/home/$USER/.bashrc"

USER $USER
WORKDIR $VOLUME
COPY --chown=$USER:$USER package.json package-lock.json ./
RUN npm ci
EXPOSE 5173
CMD ["npm", "run", "dev"]

######## BUILD ########
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM deps AS build
COPY . .
ARG VITE_BASE=/
ENV VITE_BASE=$VITE_BASE
RUN npm run build

######## PRODUCCIÓN: nginx sirviendo solo los estáticos ########
FROM nginx:1.27-alpine AS img-prod
COPY .docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
HEALTHCHECK CMD wget -qO- http://127.0.0.1/ >/dev/null || exit 1

######## EXPORT: estáticos para GitHub Pages u otro hosting ########
#   docker build -f .docker/Dockerfile --target export --output dist .
FROM scratch AS export
COPY --from=build /app/dist /

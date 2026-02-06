# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app

# Copy Yarn config + manifests first
COPY .yarnrc.yml package.json yarn.lock ./
RUN corepack enable && yarn install --immutable

# Copy source and build
COPY . .
RUN yarn build


# ---- Run stage ----
FROM nginx:alpine

# Copy built site
COPY --from=build /app/dist /usr/share/nginx/html

# SPA routing + caching rules (your custom config)
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
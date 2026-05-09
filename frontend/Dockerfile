# --- Этап 1: Сборка ---
FROM node:20-alpine AS build

WORKDIR /app

# Копируем только файлы зависимостей для кеширования слоев
COPY package.json package-lock.json ./
RUN npm install

# Копируем остальной код и собираем проект
COPY . .
RUN npm run build

# --- Этап 2: Раздача готовых файлов ---
FROM nginx:stable-alpine

# Копируем результат сборки из первого этапа в папку Nginx
# В Vite это обычно папка /dist, в Create React App — /build
COPY --from=build /app/dist /usr/share/nginx/html

# Копируем наш кастомный конфиг Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
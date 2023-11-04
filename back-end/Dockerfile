# Використовуємо офіційний образ MongoDB з Docker Hub
FROM mongo:latest

# Встановлюємо пароль для користувача адміністратора
ENV MONGO_INITDB_ROOT_USERNAME=myadmin
ENV MONGO_INITDB_ROOT_PASSWORD=adminpassword

# Встановлюємо назву бази даних за вашим вибором
ENV MONGO_INITDB_DATABASE=mydatabase

# Відкриваємо порт для доступу до MongoDB (за замовчуванням 27017)
EXPOSE 27017

# Команда запуску MongoDB при старті контейнера
CMD ["mongod"]

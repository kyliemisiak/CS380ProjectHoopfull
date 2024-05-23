# official MySQL image
FROM mysql:latest

ENV MYSQL_ROOT_PASSWORD=root
ENV MYSQL_DATABASE=hoopfulDB

# load schema
COPY HoopfullDBScript.sql /docker-entrypoint-initdb.d/

# NO LONGER NEEDED
# mysql -u root -proot -e "CREATE DATABASE hoopfulDB;"
# mysql -u root -proot hoopfulDB < /docker-entrypoint-initdb.d/HoopfullDBScript.sql

# Expose port 3306
EXPOSE 3306


# lite nodejs-boiler

## Stack
1. JS
   1. express - http://expressjs.com/
   2. sequelize - https://sequelize.org/v6/
   3. passport - 
2. DB
   1. PGSQL

## cmds
```
npm install express

npm install --save sequelize
npm install --save pg pg-hstore # Postgres

npm install --save mysql2
npm install --save mariadb
npm install --save sqlite3
npm install --save tedious # Microsoft SQL Server
```

## Certi

run at app/oauth/certs
```
openssl genrsa -out privatekey.pem 2048 
openssl req -new -key privatekey.pem -out certrequest.csr 
openssl x509 -req -in certrequest.csr -signkey privatekey.pem -out certificate.pem
```
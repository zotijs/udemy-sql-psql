# udemy-sql-psql

SQL and PostgreSQL: The Complete Developer's Guide

Repository fof Stephen Grider's postgres [course](https://www.udemy.com/course/sql-and-postgresql)

## Instructions

- run postgres via docker: `docker compose up -d`
- use vscode's [postgresql](https://marketplace.visualstudio.com/items?itemName=ckolkman.vscode-postgres) plugin to query the database

## Help

- connect to postgres server: `docker exec -it <container_id> psql -U example`
- change database (inside the container): `\c <database_name>`
- tables: `\dt`
- table details: `\d <table_name>`

## Schema Designers:

- design tool: https://sql.toad.cz/?
- config tool: https://dbdiagram.io/d

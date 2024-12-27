# udemy-sql-psql

SQL and PostgreSQL: The Complete Developer's Guide

Repository fof Stephen Grider's postgres [course](https://www.udemy.com/course/sql-and-postgresql)

## Instructions

- run postgres via docker: `docker compose up -d`
- use vscode's [postgresql](https://marketplace.visualstudio.com/items?itemName=ckolkman.vscode-postgres) plugin to query the database

## Help

- connect to postgres server: `docker exec -it <container_id> psql -U <pg_user>`
- change database (inside the container): `\c <database_name>`
- list databases: `\l`
- tables: `\dt`
- table details: `\d <table_name>`
- restore db using `pg_restore`: `docker exec -i <container_id> pg_restore -c --no-privileges --no-owner -U <pg_user> -d <database_name> < <path_to_dump>.sql` (`-c` clears the database, `--no-privileges --no-owner` allows you to specify not to include ownership or privileges at the time of restore whether or not those privileges and ownerships were included in the `pg_dump`)

## Schema Designers:

- design tool: https://sql.toad.cz/?
- config tool: https://dbdiagram.io/d

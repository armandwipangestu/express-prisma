<h1 align="center">Express Prisma</h1>
<p align="center">Simple CRUD API with Express JS, Prisma ORM and PostgreSQL Database</p>

## Running on Localhost

-   Clone this repository

```shell
git clone https://github.com/armandwipangestu/express-prisma
```

-   Install dependency

```shell
cd express-prisma && pnpm install
```

-   Create `.env` file

```shell
cp .env.development .env
```

> **NOTE**:
> Fill `DATABASE_URL` with your database postgres, for example
>
> ```
> DATABASE_URL=postgresql://USER:PASSWORD@HOSTNAME:PORT/DBNAME
> ```

## Running Prisma Studio

-   Run this command to run Prisma Studio

```shell
pnpm dlx prisma studio
```

Open your web browser with url `localhost:5555`, it will show like this

![image](https://github.com/armandwipangestu/express-prisma/assets/64394320/00d70e37-8b5b-456a-8a4d-c65062cc3abe)

> **NOTE**: If you add or edit file `schema.prisma` then you need to run this (to regenerate the schema)
>
> ```shell
> pnpm dlx prisma generate && pnpm dlx prisma db push
> ```

## Structure Folder

```
 .
├──  node_modules
├──  package.json
├──  pnpm-lock.yaml
├──  prisma
│   └──  schema.prisma
├──  README.md
└──  src
    ├──  db
    │   └──  index.js
    ├──  index.js
    └──  product
        ├──  product.controller.js
        ├──  product.repository.js
        └──  product.service.js
```

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

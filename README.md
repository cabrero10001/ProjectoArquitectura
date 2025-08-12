## Login_ArquitecuraSoftware
**Descripcion:** Este proyecto se realizo con la intencion de tener un control y registro de entradas y salidas de un personal y tener un registro basado en un calendario.
## Tecnologias Usadas
- 🔧 **Backend:** Node.js, Javascript
- 💾 **Bases de datos:** Mysql + prisma ORM
## Estrucutra del proyecto Backend

```bash
├── backend/
│   └── controllers/
│   │   ├── loginUsuario.js
│   │   ├── RegistroUsuario.js
│   │   └── 
│   └── node_modules/
│   └── prisma/
│   │   ├── schema.prisma
│   └── routes/
│   │   ├── loginUsuarioRouter.js
│   │   ├── RegistroUsuarioRouter.js
│   │   └── router.js
│   └── .env
│   └── .gitignore
│   └── app.js
│   └── package-lock.json
│   └── package.json
│   └── server.js
└── README.md
```
## Instalación
1. Clonacion de repositorio y accede al archivo principal
```bash
    git clone https://github.com/cabrero10001/ProjectoArquitectura.git
```
2. Instala las dependencias
```bash
    npm i
```
3. Configura el URL de tu base de datos en tu .env
```bash
    DATABASE_URL="mysql://usuario:contraseña@Host:puerto/dbname"
    PORT=numeroPuerto #En caso de que sea necesario 
```
4. Ejecuta las migraciones del modelo
```bash
    npx prisma migrate
    npx prisma db push
```
5. Inicia el servidor
```bash
    npm run dev
```

## Endpoints Disponibles

| METODO | ENDPOINT | DESCRIPCION |
|--------------|--------------|--------------|
| POST | api/Registro | |
| POST |  api/Login | |


## Estructura de los JSON

Proximamente...

## Modelo de dato Prima

```prisma
model User{
  id String @default(uuid())
  primerNombre String
  segundoNombre String
  primerApellido String
  segundoApellido String
  userName String
  password String
  numeroDocumento String @id
}
```
## Seguridad
- CORS Habilitado solo para frontend autorizado.
- Variables de entorno protegidas (.env)

## Estrucutra del proyecto Frontend





## Licencias
- Protegido bajo entidad privada
























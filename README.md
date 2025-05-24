# 💰 MoneyUp – App de Finanzas Personales

MoneyTrack es una aplicación web fullstack que te permite registrar, visualizar y gestionar tus ingresos y gastos personales de forma clara, segura y eficiente. Utiliza Clerk para autenticación moderna y MongoDB como base de datos.

---

## 🌐 Demo

🔗 money-up-noemirivas-projects.vercel.app


## 🔐 Autenticación con Clerk

Este proyecto utiliza **[Clerk](https://clerk.com/)** como proveedor de autenticación de usuarios. Aquí te explicamos cómo se integró:

### Frontend
- Uso de `@clerk/clerk-react` para proteger rutas.
- Login, registro, y manejo de sesión directamente con componentes de Clerk.
- ClerkProvider envuelve toda la app para facilitar acceso al usuario actual.

### Backend
- Uso de `@clerk/clerk-sdk-node`.
- Se protege el backend con `ClerkExpressWithAuth()` como middleware global.
- Los endpoints sensibles requieren token válido emitido por Clerk.

> Clerk permite autenticación con email/password o magic links, lo que lo hace muy simple de usar sin manejar contraseñas directamente.

---

## 🧩 Tecnologías utilizadas

### Frontend
- React + Vite
- Tailwind CSS
- Axios
- Clerk

### Backend
- Node.js + Express
- MongoDB + Mongoose
- Clerk SDK
- CORS, dotenv

### Deploy
- **Frontend:** Vercel
- **Backend:** Render

---

🚀 Cómo ejecutar el proyecto localmente
1. Clona el repositorio
    ````bash 
    git clone https://github.com/NoemiRivas/moneyUp.git
    cd moneytrack

2. Configura las variables de entorno

client/.env

    ```bash
        env
        VITE_API_URL=http://localhost:5000/api
        VITE_CLERK_PUBLISHABLE_KEY=tu_clave_publica_de_clerk
server/.env

    ```bash
    env
    PORT=5000
    MONGO_URL=mongodb+srv://<usuario>:<contraseña>@cluster.mongodb.net
    CLERK_SECRET_KEY=tu_clave_secreta_de_clerk
    API_VERCEL=http://localhost:5173

🔐 Asegúrate de mantener estas variables fuera del control de versiones (usa .gitignore)

3. Instala dependencias y ejecuta el proyecto

# Inicia el backend
    ```bash
    cd server
    npm install
    npm run dev
    cd client
    npm install
    npm run dev
    # En una nueva terminal, inicia el frontend




📝 Licencia
Este proyecto está bajo la licencia MIT.

Desarrollado con 💻 por Noemí Rivas

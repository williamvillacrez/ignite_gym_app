import pg from 'pg';
const { Client } = pg;

const config = {
    user: 'joshuapereda_user',
    host: 'dpg-csg4c0o8fa8c73fqreog-a.oregon-postgres.render.comD',
    database: 'joshuapereda',
    password: 'Of5vLrQCoZfWmHHKdH0BRyOM0i7B9jPJ',
    port: 5432,
    ssl: {
        rejectUnauthorized: false
    }
};

//FUNCION DE CONEXION
export async function Conectar() {
    const cliente = new Client(config);
    try {
        await cliente.connect();
        console.log("Conectado a la base de Datos");
    } catch (error) {
        console.error("Error al conectar a la base de datos:", error);
    } finally {
        await cliente.end(); // Cierra la conexión
    }
}
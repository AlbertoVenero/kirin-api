export default () => ({
    port: parseInt(process.env.PORT ?? '3000', 10),
    database: {
    type: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT ? parseInt(process.env.DB_PORT, 10) : 5432,
        database: process.env.DB_NAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,      
        autoLoadEntities: true,
        synchronize: true,
    }
});
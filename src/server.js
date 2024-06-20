import app from './app.js';

const PORT =  process.env.PORT;

const startServer = async () => {
    try {
        await prisma.$connect();
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Failed to connect to the database', error);
        process.exit(1);
    }
};

startServer();

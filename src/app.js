import express from 'express';
import userRoutes from './routes/userRoute.js';
import productRoutes from './routes/productRoute.js';
import { errorHandler } from './middlewares/errorHandler.js';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc'; 
import prisma from './config/db.js';

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Toko Online API",
      version: "1.0.0",
      description: "simple API FOR online shop",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["src/routes/*.js"]
};

const specs = swaggerJsdoc(options);

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs)
);

app.use(errorHandler);

const PORT = 3000

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

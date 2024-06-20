import express from 'express';
import userRoutes from './routes/userRoute.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use(errorHandler);

export default app;

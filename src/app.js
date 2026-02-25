import exxpress from 'express';
import cors from 'cors';
import morgan from 'morgan';
import taskRoutes from './routes/task.routes.js';
import authRoutes from './routes/auth.routes.js';
import {connectToDB} from '../src/db/connect.js';

const app = exxpress();

app.use(cors({
    origin: ['http://localhost:5173',
    process.env.FRONT_ORIGIN ||""
    ].filter(Boolean),
    credentials: true
})
);
app.use(morgan('dev'));
app.use(exxpress.json());

app.use(async (req, res, next) => {
    try{
        await connectToDB();
        next();
    } catch (e) {
        next(e);
    }
});

app.get('/', (_req, res) => 
    res.json({ ok: true, name: 'Welcome to the Todo API' }));
    app.use('/api/tasks', taskRoutes);
    app.use('/api/auth', authRoutes);
     export default app;
import express, { Application } from 'express';
import alunosRoutes from './routes/alunosRoutes'; // Importe as rotas dos alunos
// Importe outras rotas, se necessário

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Use as rotas dos alunos
app.use('/api', alunosRoutes); // Todas as rotas relacionadas a alunos terão um prefixo '/api'

// Use outras rotas aqui, se necessário

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

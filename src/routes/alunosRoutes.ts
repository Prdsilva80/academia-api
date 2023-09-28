import { Router } from 'express';
import AlunosController from '../controllers/alunosController';

const router = Router();

// Dados de exemplo (em memória) para fins de demonstração
let alunosData: { id: number; nome: string; idade: number; email: string }[] = [
    { id: 1, nome: 'Alice', idade: 25, email: 'alice@example.com' },
    { id: 2, nome: 'Bob', idade: 30, email: 'bob@example.com' },
    { id: 3, nome: 'Carol', idade: 22, email: 'carol@example.com' },
];

// Rota para buscar todos os alunos
router.get('/alunos', AlunosController.getAll);

// Rota para buscar um aluno por ID
router.get('/alunos/:id', AlunosController.getById);

// Rota para criar um novo aluno
router.post('/alunos', (req, res) => {
    const { nome, idade, email } = req.body;
    const novoAluno = { id: alunosData.length + 1, nome, idade, email };
    alunosData.push(novoAluno);
    return res.json(novoAluno);
});

// Rota para atualizar um aluno por ID
router.put('/alunos/:id', (req, res) => {
    const { id } = req.params;
    const { nome, idade, email } = req.body;
    const alunoIndex = alunosData.findIndex((aluno) => aluno.id === parseInt(id));

    if (alunoIndex === -1) {
        return res.status(404).json({ error: 'Aluno não encontrado' });
    }

    const alunoAtualizado = { id: parseInt(id), nome, idade, email };
    alunosData[alunoIndex] = alunoAtualizado;

    return res.json(alunoAtualizado);
});

// Rota para excluir um aluno por ID
router.delete('/alunos/:id', (req, res) => {
    const { id } = req.params;
    const alunoIndex = alunosData.findIndex((aluno) => aluno.id === parseInt(id));

    if (alunoIndex === -1) {
        return res.status(404).json({ error: 'Aluno não encontrado' });
    }

    const alunoExcluido = alunosData.splice(alunoIndex, 1)[0];

    return res.json(alunoExcluido);
});

export default router;

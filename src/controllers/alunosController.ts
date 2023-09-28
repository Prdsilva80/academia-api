import { Request, Response } from 'express';
const knexConfig = require('../../knexfile');
const knex = require('knex')(knexConfig);


class AlunosController {
    async getAll(req: Request, res: Response) {
        try {
            const alunos = await knex('alunos').select('*');
            return res.json(alunos);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao buscar alunos' });
        }
    }

    async getById(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const aluno = await knex('alunos').where({ id }).first();

            if (!aluno) {
                return res.status(404).json({ error: 'Aluno não encontrado' });
            }

            return res.json(aluno);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao buscar aluno' });
        }
    }

    async create(req: Request, res: Response) {
        const { nome, idade, email } = req.body;

        try {
            const [id] = await knex('alunos').insert({ nome, idade, email });
            const novoAluno = { id, nome, idade, email };
            return res.json(novoAluno);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao criar aluno' });
        }
    }

    async update(req: Request, res: Response) {
        const { id } = req.params;
        const { nome, idade, email } = req.body;

        try {
            const alunoIndex = await knex('alunos').where({ id }).update({ nome, idade, email });

            if (alunoIndex === 0) {
                return res.status(404).json({ error: 'Aluno não encontrado' });
            }

            const alunoAtualizado = { id: parseInt(id), nome, idade, email };
            return res.json(alunoAtualizado);
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao atualizar aluno' });
        }
    }

    async delete(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const alunoExcluido = await knex('alunos').where({ id }).del();

            if (alunoExcluido === 0) {
                return res.status(404).json({ error: 'Aluno não encontrado' });
            }

            return res.json({ message: 'Aluno excluído com sucesso' });
        } catch (error) {
            return res.status(500).json({ error: 'Erro ao excluir aluno' });
        }
    }
}

export default new AlunosController();

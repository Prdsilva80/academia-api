import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('alunos').del();

  // Inserts seed entries
  await knex('alunos').insert([
    { nome: 'Alice', idade: 25, email: 'alice@example.com' },
    { nome: 'Bob', idade: 30, email: 'bob@example.com' },
    { nome: 'Carol', idade: 22, email: 'carol@example.com' },
  ]);
}

import { TodoItem } from '@/components/TodoItem';
import { prisma } from './db';
import Link from 'next/link';

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, completed: boolean) {
  'use server';
  await prisma.todo.update({ where: { id }, data: { completed } });
}

export default async function Home() {
  const todos = await getTodos();
  return (
    <>
      <header className="flex justify-between mb-4 items-center">
        <h1 className="text-2xl">Todos</h1>
        <Link
          href="/new"
          className="border border-solid border-slate-200 rounded-md px-2 py-1 hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
        >
          New
        </Link>
      </header>
      <ul className="pl-4">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
}

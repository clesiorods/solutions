import prisma from "@/utils/prisma";
import TodoComponent from "@/components/Todo";

export default async function Home() {
  const todos = await prisma.todo.findMany();
  return (
    <main>
      <h1 className="font-bold">Todos</h1>
      <ul>
        {todos.map((todo, i) => (
          <TodoComponent key={i} todo={todo}></TodoComponent>
        ))}
      </ul>
    </main>
  );
}
"use client";

import { Todo } from "@prisma/client";
import { useRouter } from "next/navigation";

export default function TodoComponent({ todo }: { todo: Todo }) {
    const router = useRouter();
    const update = async (todo: Todo) => {
      await fetch(`/api/todos`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          completed: !todo.completed,
          id: todo.id,
        }),
      });
      router.refresh();
    };
  
    return (
      <li key={todo.id} className="space-x-4">
        <input
          onChange={() => update(todo)}
          type="checkbox"
          checked={todo.completed}
          className="mr-3"
        />
        {todo.title}
      </li>
    );
  }
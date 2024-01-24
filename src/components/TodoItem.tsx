'use client';

type TodoItemProps = {
  id: string;
  title: string;
  completed: boolean;
  toggleTodo: (id: string, completed: boolean) => void;
};

export function TodoItem({ id, title, completed, toggleTodo }: TodoItemProps) {
  return (
    <li className="flex gap-1 items-center">
      <input
        id={id}
        type="checkbox"
        className="cursor-pointer peer"
        defaultChecked={completed}
        onChange={(e) => toggleTodo(id, e.target.checked)}
      />
      <label htmlFor={id} className="peer-checked:line-through peer-checked:text-slate-500 text-2xl cursor-pointer">
        {title}
      </label>
      <button className="border border-solid border-slate-200 rounded-md px-2 py-1 hover:bg-slate-700  outline-none">
        delete
      </button>
    </li>
  );
}

// todoModel.ts
// このファイルは、Todoアイテムのデータ構造を定義します。

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

// ここではシンプルのため、メモリ上のデータストアを使用します。
const todos: Todo[] = [{ id: "1", title: "Learn Hono", completed: false }];

export const todoModel = {
  findAll: () => todos,
  findById: (id: string) => todos.find((todo) => todo.id === id),
  create: (todo: Todo) => {
    todos.push(todo);
    return todo;
  },
  update: (id: string, updatedTodo: Todo) => {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos[index] = updatedTodo;
    }
    return updatedTodo;
  },
  delete: (id: string) => {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos.splice(index, 1);
      return true;
    }
    return false;
  },
};

// todoController.ts
// このファイルは、ビジネスロジックを処理します。

import { Todo, todoModel } from "../models/todoModel";

export const todoController = {
  getAllTodos: async () => {
    return todoModel.findAll();
  },
  getTodoById: async (id: string) => {
    return todoModel.findById(id);
  },
  createTodo: async (title: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      completed: false,
    };
    return todoModel.create(newTodo);
  },
  updateTodo: async (id: string, title: string, completed: boolean) => {
    const updatedTodo: Todo = { id, title, completed };
    return todoModel.update(id, updatedTodo);
  },
  deleteTodo: async (id: string) => {
    return todoModel.delete(id);
  },
};

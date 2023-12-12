// todoRoutes.ts
// このファイルは、ルートとそれに対応するコントローラのアクションを定義します。

import { Hono } from "hono";
import { todoController } from "../controllers/todoController";

export const todoRoutes = (app: Hono) => {
  app.get("/todos", async (c) => {
    const todos = await todoController.getAllTodos();
    return c.json(todos);
  });

  app.get("/todos/:id", async (c) => {
    const id = c.req.param("id");
    const todo = await todoController.getTodoById(id);
    return todo ? c.json(todo) : c.json({ error: "Not Found" });
  });

  app.post("/todos", async (c) => {
    const { title } = await c.req.json();
    const newTodo = await todoController.createTodo(title);
    return c.json(newTodo);
  });

  app.put("/todos/:id", async (c) => {
    const id = c.req.param("id");
    const { title, completed } = await c.req.json();
    const updatedTodo = await todoController.updateTodo(id, title, completed);
    return c.json(updatedTodo);
  });

  app.delete("/todos/:id", async (c) => {
    const id = c.req.param("id");
    const result = await todoController.deleteTodo(id);
    return result
      ? c.json({ message: "Deleted successfully" })
      : c.json({ error: "Not Found" });
  });
};

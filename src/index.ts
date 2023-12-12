import { Hono } from "hono";
import { todoRoutes } from "./routes/todoRoutes";

const app = new Hono();

// Todoルートをアプリケーションに追加
todoRoutes(app);

export default app;

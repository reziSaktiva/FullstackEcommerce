import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/user";
import type { Application, Request, Response } from "express";

dotenv.config();

const app: Application = express();
const port: number = parseInt(process.env.PORT || "3000", 10);

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use("/users", userRoutes);

// Default route
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to my TypeScript API!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

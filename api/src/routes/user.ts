import { Router } from "express";
import type { Request, Response } from "express";

const router = Router();

// Example route
router.get("/", (req: Request, res: Response) => {
  res.json({ message: "List of users" });
});

router.post("/", (req: Request, res: Response) => {
  const { name }: { name: string } = req.body;
  res.json({ message: `User ${name} added!` });
});

export default router;

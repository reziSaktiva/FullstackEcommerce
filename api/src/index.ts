import express, { json, urlencoded, Request } from "express";
import productsRoutes from "./routes/products/index";
import authRoutes from "./routes/auth/index";
import ordersRoutes from "./routes/orders/index";
import stripeRoutes from "./routes/stripe/index";

import serverless from "serverless-http";

const port = 3001;
const app = express();

app.use(urlencoded({ extended: false }));
app.use(
  json({
    verify: (req: Request, res, buf) => {
      req.rawBody = buf;
    },
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/products", productsRoutes);
app.use("/auth", authRoutes);
app.use("/orders", ordersRoutes);
app.use("/stripe", stripeRoutes);

if (process.env.NODE_ENV === "dev") {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

export const handler = serverless(app);

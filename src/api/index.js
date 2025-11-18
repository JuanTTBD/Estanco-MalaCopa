import express from "express";
import cors from "cors";
import products from "./data/products.json" assert { type: "json" };

const app = express();
app.use(cors());
app.use(express.json());

// ENDPOINT PRINCIPAL
app.get("/products", (req, res) => {
  res.json(products);
});

// POR ID
app.get("/products/:id", (req, res) => {
  const id = Number(req.params.id);
  const product = products.find((p) => p.id === id);

  if (!product) {
    return res.status(404).json({ error: "Producto no encontrado" });
  }

  res.json(product);
});

// Puerto local
app.listen(4000, () => {
  console.log("API corriendo en http://localhost:4000");
});

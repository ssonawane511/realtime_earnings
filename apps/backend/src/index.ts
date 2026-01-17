import express from "express";

const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ message: "API working 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
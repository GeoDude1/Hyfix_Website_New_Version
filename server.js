import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, "dist");
const port = process.env.PORT || 3000;

const app = express();

app.use(express.static(dist));

// SPA fallback: serve index.html for routes so /home, /applications, /about work on load/refresh
app.get("*", (req, res) => {
  res.sendFile(path.join(dist, "index.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

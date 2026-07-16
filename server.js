import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3000;

// View engine setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Static middleware to serve the public folder (CSS, images, client JS)
app.use(express.static(path.join(__dirname, "public")));

// Home route
app.get("/", async (req, res) => {
  const title = "Home";
  res.render("index", { title });
});

// Organizations route
app.get("/organizations", async (req, res) => {
  const title = "Organizations";
  res.render("organizations", { title });
});

// Service Projects route
app.get("/projects", async (req, res) => {
  const title = "Service Projects";
  res.render("projects", { title });
});

// Categories route
app.get("/categories", async (req, res) => {
  const title = "Categories";
  res.render("categories", { title });
});

// 404 handler
app.use(async (req, res) => {
  res.status(404).render("404", { title: "Page Not Found" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

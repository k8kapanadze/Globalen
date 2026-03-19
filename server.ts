import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API routes
  app.post("/api/checkout", (req, res) => {
    const { items, contactInfo } = req.body;
    
    console.log("New Order Received!");
    console.log("Contact Info:", contactInfo);
    console.log("Basket Items:", items);

    // Simulate sending email to organization
    console.log(`Sending email to info@gen.ge with order details...`);
    
    // In a real app, you would use a service like Nodemailer or SendGrid here.
    
    res.json({ success: true, message: "Order received and email sent to organization." });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();

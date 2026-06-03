import { createServer } from "node:http";
import crypto from "node:crypto";
import { createReadStream, readFile, stat } from "node:fs";
import { join, normalize, extname } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL(".", import.meta.url));
const port = Number(process.env.PORT || 5173);
const host = "127.0.0.1";
const adminUser = "admin";
const adminPassword = "nexkart123";
const sessions = new Set();

const types = new Map([
  [".html", "text/html; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
]);

const categories = [
  "Grocery",
  "Fashion",
  "Mobile",
  "Beauty",
  "Appliances",
  "Toys",
  "Food & Health",
  "Auto Accessories",
  "2 Wheelers",
  "Sports",
  "Books",
  "Furniture",
];

const products = [
  { id: 1, name: "Organic Basmati Rice", category: "Grocery", price: 699, stock: 128, rating: 4.6 },
  { id: 2, name: "Urban Denim Jacket", category: "Fashion", price: 1299, stock: 42, rating: 4.4 },
  { id: 3, name: "NexTech Ultra Pro 5G", category: "Mobile", price: 74999, stock: 19, rating: 4.8 },
  { id: 4, name: "HydraGlow Serum", category: "Beauty", price: 599, stock: 87, rating: 4.5 },
  { id: 5, name: "Smart LED TV 43", category: "Appliances", price: 24999, stock: 24, rating: 4.3 },
  { id: 6, name: "Builder Blocks Set", category: "Toys", price: 899, stock: 64, rating: 4.7 },
  { id: 7, name: "Whey Protein Pack", category: "Food & Health", price: 1999, stock: 52, rating: 4.4 },
  { id: 8, name: "Car Vacuum Cleaner", category: "Auto Accessories", price: 1599, stock: 31, rating: 4.2 },
  { id: 9, name: "Electric Scooter Lite", category: "2 Wheelers", price: 64999, stock: 12, rating: 4.5 },
  { id: 10, name: "Yoga Mat Pro", category: "Sports", price: 799, stock: 96, rating: 4.6 },
  { id: 11, name: "Atomic Habits", category: "Books", price: 399, stock: 143, rating: 4.9 },
  { id: 12, name: "Ergo Office Chair", category: "Furniture", price: 6999, stock: 27, rating: 4.4 },
];

const orders = [
  { id: "NK-1001", customer: "Aarav Sharma", status: "Delivered", total: 74999, items: 1, createdAt: "2026-06-01" },
  { id: "NK-1002", customer: "Priya Mehta", status: "Processing", total: 3297, items: 3, createdAt: "2026-06-01" },
  { id: "NK-1003", customer: "Rohan Verma", status: "Shipped", total: 24999, items: 1, createdAt: "2026-05-31" },
  { id: "NK-1004", customer: "Neha Kapoor", status: "Pending", total: 899, items: 1, createdAt: "2026-05-31" },
];

const supportTickets = [
  { id: "SUP-21", type: "Complaint", customer: "Aarav Sharma", status: "Open", subject: "Late delivery" },
  { id: "SUP-22", type: "Feedback", customer: "Priya Mehta", status: "New", subject: "Loved grocery section" },
  { id: "SUP-23", type: "Support", customer: "Rohan Verma", status: "Resolved", subject: "Payment confirmation" },
];

function sendJson(res, data, status = 200) {
  res.writeHead(status, { "content-type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(data, null, 2));
}

function parseCookies(req) {
  return Object.fromEntries(
    (req.headers.cookie || "")
      .split(";")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => {
        const index = part.indexOf("=");
        return [part.slice(0, index), decodeURIComponent(part.slice(index + 1))];
      })
  );
}

function isAuthed(req) {
  return sessions.has(parseCookies(req).nexkart_admin);
}

function readJsonBody(req) {
  return new Promise((resolve) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      try {
        resolve(body ? JSON.parse(body) : {});
      } catch {
        resolve({});
      }
    });
  });
}

async function handleApi(req, res, url) {
  const pathname = url.pathname;
  const query = (url.searchParams.get("q") || "").toLowerCase();
  const category = url.searchParams.get("category");

  if (pathname === "/api/health") {
    sendJson(res, { ok: true, service: "NexKart backend", timestamp: new Date().toISOString() });
    return true;
  }

  if (pathname === "/api/login" && req.method === "POST") {
    const body = await readJsonBody(req);
    if (body.username === adminUser && body.password === adminPassword) {
      const token = crypto.randomUUID();
      sessions.add(token);
      res.writeHead(200, {
        "content-type": "application/json; charset=utf-8",
        "set-cookie": `nexkart_admin=${encodeURIComponent(token)}; HttpOnly; SameSite=Lax; Path=/`,
      });
      res.end(JSON.stringify({ ok: true, user: adminUser }));
      return true;
    }
    sendJson(res, { ok: false, error: "Invalid username or password" }, 401);
    return true;
  }

  if (pathname === "/api/logout" && req.method === "POST") {
    const token = parseCookies(req).nexkart_admin;
    if (token) sessions.delete(token);
    res.writeHead(200, {
      "content-type": "application/json; charset=utf-8",
      "set-cookie": "nexkart_admin=; HttpOnly; SameSite=Lax; Path=/; Max-Age=0",
    });
    res.end(JSON.stringify({ ok: true }));
    return true;
  }

  if (pathname === "/api/session") {
    sendJson(res, { authenticated: isAuthed(req), user: isAuthed(req) ? adminUser : null });
    return true;
  }

  if (pathname === "/api/categories") {
    sendJson(res, { categories });
    return true;
  }

  if (pathname === "/api/products") {
    let result = products;
    if (category) result = result.filter((product) => product.category.toLowerCase() === category.toLowerCase());
    if (query) {
      result = result.filter((product) =>
        `${product.name} ${product.category}`.toLowerCase().includes(query)
      );
    }
    sendJson(res, { products: result });
    return true;
  }

  if (pathname === "/api/orders") {
    if (req.method === "POST") {
      const body = await readJsonBody(req);
      const nextOrder = {
        id: `NK-${1000 + orders.length + 1}`,
        customer: body.customer || "Guest Customer",
        status: "Pending",
        total: Number(body.total || 0),
        items: Number(body.items || 1),
        createdAt: new Date().toISOString().slice(0, 10),
      };
      orders.unshift(nextOrder);
      sendJson(res, { order: nextOrder }, 201);
      return true;
    }
    sendJson(res, { orders });
    return true;
  }

  if (pathname === "/api/tickets") {
    sendJson(res, { tickets: supportTickets });
    return true;
  }

  if (pathname === "/api/dashboard") {
    if (!isAuthed(req)) {
      sendJson(res, { error: "Dashboard login required" }, 401);
      return true;
    }
    const revenue = orders.reduce((sum, order) => sum + order.total, 0);
    const stock = products.reduce((sum, product) => sum + product.stock, 0);
    const byCategory = categories.map((name) => ({
      name,
      count: products.filter((product) => product.category === name).length,
      stock: products.filter((product) => product.category === name).reduce((sum, product) => sum + product.stock, 0),
    }));
    sendJson(res, {
      metrics: {
        revenue,
        orders: orders.length,
        products: products.length,
        stock,
        openTickets: supportTickets.filter((ticket) => ticket.status !== "Resolved").length,
      },
      byCategory,
      recentOrders: orders.slice(0, 5),
      lowStock: products.filter((product) => product.stock < 30),
      tickets: supportTickets,
    });
    return true;
  }

  return false;
}

function sendFile(filePath, res) {
  stat(filePath, (error, stats) => {
    if (error || !stats.isFile()) {
      res.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
      res.end("Not found");
      return;
    }

    const type = types.get(extname(filePath).toLowerCase()) || "application/octet-stream";
    if (extname(filePath).toLowerCase() === ".html") {
      readFile(filePath, "utf8", (readError, html) => {
        if (readError) {
          res.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
          res.end("Unable to read page");
          return;
        }

        let injected = html.includes("/responsive-fixes.css")
          ? html
          : html.replace("</head>", '<link rel="stylesheet" href="/responsive-fixes.css"/></head>');
        injected = injected.includes("/theme-settings.css")
          ? injected
          : injected.replace("</head>", '<link rel="stylesheet" href="/theme-settings.css"/></head>');
        injected = injected.includes("/theme-settings.js")
          ? injected
          : injected.replace("</body>", '<script src="/theme-settings.js"></script></body>');
        injected = injected.includes("/home-categories.js")
          ? injected
          : injected.replace("</body>", '<script src="/home-categories.js"></script></body>');
        injected = injected.includes("/home-after-categories.js")
          ? injected
          : injected.replace("</body>", '<script src="/home-after-categories.js"></script></body>');
        injected = injected.includes("/listing-catalog.js")
          ? injected
          : injected.replace("</body>", '<script src="/listing-catalog.js"></script></body>');
        injected = injected.includes("/prototype-actions.js")
          ? injected
          : injected.replace("</body>", '<script src="/prototype-actions.js"></script></body>');
        res.writeHead(200, { "content-type": type });
        res.end(injected);
      });
      return;
    }

    res.writeHead(200, { "content-type": type });
    createReadStream(filePath).pipe(res);
  });
}

createServer((req, res) => {
  const url = new URL(req.url || "/", `http://${host}:${port}`);
  let pathname = decodeURIComponent(url.pathname);

  if (pathname.startsWith("/api/")) {
    handleApi(req, res, url).then((handled) => {
      if (!handled) sendJson(res, { error: "API route not found" }, 404);
    });
    return;
  }

  if (pathname === "/") {
    pathname = "/home_screen_dark_glassmorphism_live/code.html";
  }

  let filePath = normalize(join(root, pathname));
  if (!filePath.startsWith(root)) {
    res.writeHead(403, { "content-type": "text/plain; charset=utf-8" });
    res.end("Forbidden");
    return;
  }

  if (!extname(filePath)) {
    filePath = join(filePath, "code.html");
  }

  sendFile(filePath, res);
}).listen(port, host, () => {
  console.log(`Nexkart live at http://${host}:${port}/`);
});

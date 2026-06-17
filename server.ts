import http from "http";

const PORT: number = parseInt(process.env.PORT || "3001", 10);

const server = http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ message: "Hello, World!" }));
  } else if (req.url === "/health" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "healthy" }));
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not Found" }));
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

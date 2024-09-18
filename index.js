// import { createServer } from "http-server";
import express from "express";

const app = express();

app.use(express.json());

const port = 8000;

// const server = createServer((request, response) => {
//   response.statusCode = 200;
//   response.setHeader("Content-type", "text/plain");
//   response.setHeader("Access-Control-Allow-Origin", "*");
//   response.setHeader("Access-Control-Reques-Method", "*");
//   response.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
//   response.setHeader("Access-Control-Allow-Headers", "*");
//   response.end("Hello World");
// });

app.get("/articles", (request, response) => {
  response.send("Hello Response from Express");
});

app.post("/addArticle", (request, response) => {
  const { title } = request.body;

  response.send(`Product successfully added ${title}`);
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}/`);
});

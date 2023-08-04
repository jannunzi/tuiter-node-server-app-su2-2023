function Examples(app) {
  app.get("/hello", (req, res) => {
    res.send("Hello World! Life is Good!");
  });

  app.get("/", (req, res) => {
    res.send(`<div>
            <h1>Welcome to Web Dev!</h1>
            </div>`);
  });

  app.get("/add/:num1/:num2", (req, res) => {
    const num1 = parseInt(req.params.num1);
    const num2 = parseInt(req.params.num2);
    const sum = num1 + num2;
    res.json({ sum: sum });
  });
}

export default Examples;

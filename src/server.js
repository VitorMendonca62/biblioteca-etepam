const app = require("./app")
const PORT = 4041

app.listen(PORT, () => {
  console.log(`Server rodando na url: http://localhost:${PORT}/`);
});

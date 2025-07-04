import app from "./app";
import config from "./config";
const port = config.port || 3000;

try {
  app.listen(port, () => {
    console.log(`⭐⭐  Example app listening on port ${port} ⭐⭐`);
  });
} catch (error) {
  console.log(error);
}

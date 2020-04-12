import app from "./app";
import constants from "./constants";

function start() {
  try {
    app.listen(constants.PORT);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
}

start();

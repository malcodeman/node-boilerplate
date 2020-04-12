import { Sequelize } from "sequelize";

import constants from "./constants";
import utils from "./utils";

const sequelize = new Sequelize(constants.DB_URL, {
  logging: (message) => utils.logger.log(message),
});

async function authenticate() {
  try {
    await sequelize.authenticate();

    utils.logger.log("Connection has been established successfully.");
  } catch (error) {
    utils.logger.log(
      `Unable to connect to the database: ${error}`,
      utils.logger.LEVELS.ERROR
    );
  }
}

async function sync() {
  try {
    await sequelize.sync({ force: constants.NODE_ENV === "development" });

    utils.logger.log("Synched successfully.");
  } catch (error) {
    utils.logger.log(`Unable to sync: ${error}`, utils.logger.LEVELS.ERROR);
  }
}

authenticate();
sync();

export default sequelize;

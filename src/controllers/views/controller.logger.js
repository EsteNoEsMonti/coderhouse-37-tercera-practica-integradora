import { winstonLogger } from "../../utils/logger.js"

export function loggerController(req, res, next) {
  try {
    req.logger.fatal("🌙 fatal req.logger.fatal")
    winstonLogger.fatal("🌙 fatal winstonLogger.fatal")
    req.logger.error("🌙 error req.logger.error")
    winstonLogger.error("🌙 error  winstonLogger.error")
    req.logger.warning("🌙 warning req.logger.warning")
    winstonLogger.warning("🌙 warning winstonLogger.warning")
    req.logger.info("🌙 info req.logger.info")
    winstonLogger.info("🌙 info winstonLogger.info")
    req.logger.http("🌙 http req.logger.http")
    winstonLogger.http("🌙 http winstonLogger.http")
    req.logger.debug("🌙 debug req.logger.debug")
    winstonLogger.debug("🌙 debug winstonLogger.debug")
    res.json("🌙 OK. If you want you can check logs in the console 💻☮ Bye, have a nice day ✌")
  } catch (error) {
    req.logger.fatal("🌙 fatal req.logger.fatal")
    winstonLogger.fatal("🌙 fatal winstonLogger.fatal")
    next(error)
  }
}
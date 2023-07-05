
import { ENV } from '../config/config.js'
import winston from 'winston'

// const levelsWinston = {
//     error: 0,
//     warn: 1,
//     info: 2,
//     http: 3,
//     verbose: 4,
//     debug: 5,
//     silly: 6
// }
const levelsWinston = {
  fatal: 0,
  error: 1,
  warning: 2,
  info: 3,
  http: 4,
  debug: 5
}

const winstonLoggerDev = winston.createLogger({
  levels: levelsWinston,
  transports: [
    new winston.transports.Console({
      level: "debug",
    }),
    new winston.transports.File({
      level: "error",
      filename: 'development.log'
    })
  ]
})

const winstonLoggerProd = winston.createLogger({
  levels: levelsWinston,
  transports: [
    new winston.transports.File({
      level: "http",
      filename: 'production.log'
    }),
    new winston.transports.Console({
      level: "info"
    })
  ]
})

export let winstonLogger
if (ENV === 'production') {
  winstonLogger = winstonLoggerProd
} else {
  winstonLogger = winstonLoggerDev
}
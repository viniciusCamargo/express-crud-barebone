import chalk from 'chalk'

const prefix = '********'
const log = {
  bgBlue: (_toLog) => console.log(chalk.bgBlue(prefix, _toLog)),
  bgRed: (_toLog) => console.log(chalk.bgRed(prefix, _toLog)),
  bgGreen: (_toLog) => console.log(chalk.bgGreen(prefix, _toLog))
}

export default log

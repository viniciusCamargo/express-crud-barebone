import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import { collection } from './db'
import route from './route'
import log from './log'
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.set('views', 'src/views')
app.set('view engine', 'ejs')
app.use(express.static('src/public'))

app.use('/', route)
app.get('/favicon.ico', (req, res) => res.sendStatus(204))

const port = 3636
app.listen(port, (err) => {
  if (err) console.log('err')
  log.bgBlue(`Running at http://localhost:${port}`)
})

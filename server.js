const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({ noCors: true })
const cors = require('cors');

server.use(middlewares)
server.use(router)
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Headers', '*')
  next()
})

server.listen(3001, () => {
  console.log('JSON Server is running')
})
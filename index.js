const express = require('express')
const helmet = require('helmet')
const projectsRouter = require('./routers/project-router')

const server = express();
const port = process.env.PORT || 3000

server.use(helmet())
server.use(express.json())

server.use(projectsRouter)

server.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        message: 'Something Went Wrong',
    })
})

server.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})
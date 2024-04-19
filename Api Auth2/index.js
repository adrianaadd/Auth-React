require('dotenv').config()
const {syncModels, checkConnection} = require('./database/index')
const { addRelationsToModels } = require('./database/models')

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

async function checkAndSyncSQL() {
    await checkConnection()
    addRelationsToModels()
    await syncModels()
}
const port = 3000 
function initAndListen(){
    const app = express()
    .use(cors())
    .use(express.json())
    .use(morgan('dev'))
    .use('/api', require('./api/routes'))
    .listen(port, () => {
        console.log(`Listening on port ${port}`)
    })
}

async function startAPI(){
    await checkAndSyncSQL()
    initAndListen()
}

startAPI()
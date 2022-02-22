const express = require('express')
// const { route } = require('express/lib/application')
// const res = require('express/lib/response')
const router = express.Router()

router.use(logger)

router.get('/', (req,res) => {
    res.send("User List")
})

router.get('/new', (req,res) => {
    res.send("User New Form")
})

router.post('/', (req, res) => {
    res.send('Creat User')
})

router
    .route("/:id")
    .get((req, res) => {
        console.log(req.users)
        res.send(`Get User With ID ${req.params.id}`)
    })
    .put((req,res) => {
        res.send(`Update User With ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User With ID ${req.params.id}`)
    })

const users = [{name : "CAD"} , { name : "Nguyen Anh Duc"}]
router.param("id", (req, res, next, id) => {
    req.users = users[id]
    next()
})

function logger(req, res, next){
    console.log(req.originalUrl)
    next()
}

module.exports = router
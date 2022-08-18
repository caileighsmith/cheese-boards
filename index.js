const {User} = require('./users')
const {Board} = require('./board')
const {Cheese} = require('./cheese')
const {db} = require('./db')
const express = require('express')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

User.hasMany(Board)
Board.belongsTo(User, {through:'newDb'})

app.post('/user/add', async(req, res)=>{
    let username = req.body.username
    let email = req.body.email

    if (username && email){
        const newUser = await User.create({
            name: username,
            email : email
        })
        await res.send(newUser)

    }

})


app.listen(5000)


module.exports = {
    User,
    Board,
    Cheese
}
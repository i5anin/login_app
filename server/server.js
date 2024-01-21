import express from 'express'
import cors from 'cors'
import fs from 'fs'
import { v4 } from 'uuid'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Express is working...')
})

app.post('/login', (req, res) => {

    const { login, pass } = req.body
    const Users = JSON.parse(fs.readFileSync('users.json', 'utf-8'))

    const exist = Users.find((el) => el.login == login && el.pass == pass)

    if(exist)
    {
        const token = v4()
        exist.token_login = token
        fs.writeFileSync('users.json', JSON.stringify(Users))

        return res.send({status: 'ok', token})
    }

    res.send({status: 'err'})
})

app.post('/check-login', (req, res) => {

    const { token } = req.body
    const Users = JSON.parse(fs.readFileSync('users.json', 'utf-8'))

    const exist = Users.find((el) => el.token_login == token)

    if(exist)
        return res.send({ status: 'ok', body: exist })

    res.send({status: 'err'})
})

app.listen(5000, () => {
    console.log('Server running...')
})
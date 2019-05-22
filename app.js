const express = require('express')
const app = express()
app.use(express.static('./views'))
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

const fetch = require('node-fetch')
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.get('/', (req, res) => {
    res.render('index')
})
const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`server started on port ${port}`)
})
let diary = ['add']
app.post('/diary', function (req, resp) {
    const pa = req.body.newdiary1

    diary.push(pa)

    resp.send('success')
})

let pass = ['jasmine']
let name = ['jasmine']

app.post('/login', function (req, resp) {
    var password = req.body.password
    var username = req.query.username
    console.log(password)
    console.log(username)
    var count = 0
    var count1 = 0
    var result = ''
    var result1 = ''
    for (count = 0; count < password.length; count++) {
        if (pass[count] === password) {
            result = pass[count]
        }
    }
    for (count1 = 0; count1 < username.length; count1++) {
        if (name[count1] === username) {
            result1 = name[count1]
        }
    }
    if (result === password && result1 === username) {
        resp.send('success')
    }
})

let date = ['1000-01-03']
app.post('/date', function (req, resp) {
    const pb = req.body.date1
    date.push(pb)
    resp.send('success')
})

let subject = ['www']
app.post('/subject', function (req, resp) {
    const pc = req.body.subject1
    subject.push(pc)
    resp.send('success')
})

app.get('/time', async function (req, resp) {
    let response = await fetch('http://worldtimeapi.org/api/ip')
    let body = await response.text()
    let time = JSON.parse(body)
    let realtime = time.datetime
    resp.send(realtime)
})

app.get('/search', async function (req, resp) {
    let atime = req.query.searchtime
    var count = 0
    var result = ''
    for (count = 0; count < date.length; count++) {
        if (date[count] === atime) {
            result = diary[count]
        }
    }
    resp.send(result)
})

app.get('/searchsubject', async function (req, resp) {
    let asubject = req.query.searchsubject
    var count = 0
    var result = ''
    for (count = 0; count < subject.length; count++) {
        if (subject[count] === asubject) {
            result = diary[count]
        }
    }
    resp.send(result)
})

app.get('/deletedate', async function (req, resp) {
    let deletedate = req.query.deletedate
    var count = 0
    for (count = 0; count < date.length; count++) {
        if (date[count] === deletedate) {
            date.splice(count, 1)
            diary.splice(count, 1)
            subject.splice(count, 1)
            console.log(date)
            console.log(diary)
            console.log(subject)
            resp.send('success')
        }
    }

    resp.send('fail')
})

app.get('/deletesubject', async function (req, resp) {
    let deletesubject = req.query.deletesubject
    var count = 0

    for (count = 0; count < subject.length; count++) {
        if (subject[count] === deletesubject) {
            date.splice(count, 1)
            diary.splice(count, 1)
            subject.splice(count, 1)
            console.log(date)
            console.log(diary)
            console.log(subject)
            resp.send('success')
        }
    }

    resp.send('fail')
})

app.get('/editbysubject', async function (req, resp) {
    let editsubject = req.query.editsubject
    let response = await fetch('http://127.0.0.1:8090/searchsubject?searchsubject=' + editsubject)
    let body = await response.text()
    if (body === '') {
        resp.send('fail')
    } else {
        resp.send(body)
    }
})

app.post('/editdiary', async function (req, resp) {
    const paa = req.body.editdiary1
    const pbb = req.query.checksubject
    console.log(paa)
    console.log(pbb)
    var count = 0
    for (count = 0; count < subject.length; count++) {
        if (subject[count] === pbb) {
            diary[count] = paa
            console.log(diary)
            resp.send('success')
        }
    }
})

app.get('/editbydate', async function (req, resp) {
    let editdate = req.query.editdate
    let response = await fetch('http://127.0.0.1:5000/search?searchtime=' + editdate)
    let body = await response.text()
    if (body === '') {
        resp.send('fail')
    } else {
        resp.send(body)
    }
})

app.post('/editdiary1', async function (req, resp) {
    const pcc = req.body.editdiary2
    const pff = req.query.checkdate

    var count = 0
    for (count = 0; count < date.length; count++) {
        if (date[count] === pff) {
            diary[count] = pcc

            resp.send('success')
        }
    }
})

app.get('/listdate', async function (req, resp) {
    resp.send(date)
})

app.get('/listsubject', async function (req, resp) {
    resp.send(subject)
})

module.exports = app

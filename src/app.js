const express = required('express')
const app = express()
app.use(express.json())
app.use(express.urlendcoded({extend: true}))

module.exports = app;
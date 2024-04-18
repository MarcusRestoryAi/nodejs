//Skapar en Express Objekt
const express = require("express")
const app = new express()
const portNr = 8080

app.use(express.json())

//Initiera server
app.listen(portNr, () => {
    console.log(`Servern ligger nu på portnr ${portNr} och lyssnar`)
});
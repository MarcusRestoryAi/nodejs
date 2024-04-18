//Skapar en Express Objekt
const express = require("express")
const app = new express()
const portNr = 8080

app.use(express.json())

//Initiera server
app.listen(portNr, () => {
    console.log(`Servern ligger nu på portnr ${portNr} och lyssnar`)
});

//Skapa en init endpoint
app.get("/", (req, res) => {
    //res.send("Trevligt att se dig igen!")
    res.status(200).sendFile("views/index.html", {root: __dirname})
})
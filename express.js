//Import av fs
const fs = require("fs")

//Skapar en Express Objekt
const express = require("express")
const app = new express()
const portNr = 8080

app.use(express.json())

const jsonFilePath = "./jsonData.txt"

//Initiera server
app.listen(portNr, () => {
    console.log(`Servern ligger nu på portnr ${portNr} och lyssnar`)
});

//Skapa en endpoint för index
app.get("/", (req, res) => {
    //res.send("Trevligt att se dig igen!")
    res.status(200).sendFile("views/index.html", {root: __dirname})
})

//Skapa en endpoint för about
app.get("/about", (req, res) => {
    //res.send("Trevligt att se dig igen!")
    res.status(200).sendFile("views/about.html", {root: __dirname})
})

//Endpoint för att ta emot data och spara det i fil
app.post("/students", (req, res) => {
    //Hämta data från req
    const data = req.body
    //console.log(data)

    //Skapa en JSON sträng
    const jsonString = JSON.stringify(data, null, 2);

    //Spara JSONSträng i fil
    fs.writeFile(jsonFilePath, jsonString, (err) => {
        if (err) console.log(err)
    })

    res.send(`Data recieved: ${jsonString}`)
})

//Endpoint för att hämta sparad data
app.get("/students", (req, res) => {
    //Kontrollera att filen existerar
    if (!fs.existsSync(jsonFilePath)) {
        res.status(204).send("Det finns ingen data!")
    }

    fs.readFile(jsonFilePath, "utf8", (err, data) => {
        if (err) throw err

        //SKicka tillbaka data till user
        res.status(200).send(data)
    })
})
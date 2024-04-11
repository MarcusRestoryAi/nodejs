//Importera fs paketet
const fs = require("fs")

//sökväg till txt fil
const filePath = "./log.txt"

let text = "Lorem Ipsum double hello world"

fs.writeFileSync(filePath, text, (err) => {
    if (err) console.log("Något har gått fel")
    else console.log("Success!")
})

//Hämta data från fil
//Kolla först om filen existerar
if (fs.existsSync(filePath)) {
    //File exists. Read from file
    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) return

        //Skriva ut data till console
        console.log(data);
    })
}
else console.log("File gone!")

//Skapa ny map
let dirCreation = fs.mkdirSync("./newFolder/", {recursive: true})

//console.log(dirCreation);

console.log(`Finns mappen: ${fs.existsSync("./newFolder/")}`);
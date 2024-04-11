async function iss() {
    const issUrl = "https://api.wheretheiss.at/v1/satellites/25544";

    //fetch iss data
    let response = await fetch(issUrl);
    let data = await response.json();
/*
    for (x in data) {
        console.log(x + ': ' + data[x])
    }
    */
   console.log(data.velocity)
}
/*
async () => {
    await iss();
}
*/
iss();
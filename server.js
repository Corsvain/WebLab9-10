const express = require("express");
   
const app = express();

const PORT = 5000
const HOST = "localhost"

const urlencodedParser = express.urlencoded({extended: false});

app.use(express.static("static"))

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`<h1 style="background-color:red; color:white; padding:10px;">Ваша форма отправлена.</h1>
    <div style="background-color:yellow;"> 
        <br> ${request.body.street} 
        <br> ${request.body.infa} 
        <br> ${request.body.zip} 
        <br> ${request.body.place} 
        <br> ${request.body.country} 
        <br> ${request.body.code} 
        <br> ${request.body.phone}
        <br> ${request.body.email} 
        <br> 
    </div>
    <div style="margin-top: 20px;">
        <a style="padding:10px; color:black; background-color:lime;" class="btn-return" href="/">Вернуться на главную</a>
    </div>`
     );
});
   
app.listen(PORT, HOST, ()=>console.log(`Server started on http://${HOST}:${PORT}`));
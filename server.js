const express = require("express");
const path = require("path");

var app = express();
var PORT = 3000;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
var Reservations = [
{
    
Name:"",
Email: "",
Phone: "",
ID:""
}
]
var Waitlist = [
    {Name:"",
    Email: "",
    Phone: "",
    ID:""
    }
]

let currentResNumber= 1; 
//May need a different route here? 
app.post("/api/reserve", function(req, res) {
    const newReservation = req.body; 
​
    newReservation.tableNumber =  currentResNumber; 
   
    if (currentResNumber <= 5){
        Reservations.push(newReservation); 
    } else {
        Waitlist.push(newReservation); 
    }

    currentResNumber++; 
​
    //Need to decide what we are doing after the post
    res.json(); 
}); 




app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html" ));
});

app.get("/table", function(req, res) {
    res.sendFile(path.join(__dirname, "table.html" ))
});
 app.get("/reserve", function(req, res) {
     res.sendFile(path.join(__dirname, "reserve.html"))
 });
app.get("/api/characters", function(req, res) {
    return res.join(characters)
});

app.listen(PORT, function(){
    console.log("app listening on 3000" + PORT);
});

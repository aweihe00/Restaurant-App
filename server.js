const express = require("express");
const path = require("path");

var app = express();
var PORT = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

let Reservations = [
]

let Waitlist = [
    
]

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html" ));
});

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tables.html" ))
});
 app.get("/reserve", function(req, res) {
     res.sendFile(path.join(__dirname, "reserve.html"))
 });
app.get("/api/tables", function(req, res) {
    return res.json(Reservations);
});
app.get("/api/waitlist", function(req, res) {
    return res.json(Waitlist);
});

app.listen(PORT, function(){
    console.log("app listening on http://localhost:" + PORT);
});

app.get("/clear", function(req, res) {
    Reservations=[]; 
    Waitlist=[]; 
    currentResNumber=1; 
    console.log(Reservations); 
    console.log(Waitlist); 
    res.redirect("/"); 
});

let currentResNumber= 1; 
app.post("/api/tables", function(req, res) {

    let newReservation = req.body;
    newReservation.tableNumber =  currentResNumber; 
    
    if (currentResNumber <= 5){
        Reservations.push(newReservation); 
    } else {
        Waitlist.push(newReservation); 
    }

    currentResNumber += 1;  
  
    console.log("The new Reservation is ")
    console.log(newReservation);
    console.log("The list of Reservations is ")
    console.log(Reservations); 
    console.log("This is the waitlist")
    console.log(Waitlist); 
  
  
    res.json(newReservation);
  });


var express = require("express");
var path = require("path");
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
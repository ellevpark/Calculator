const express = require("express");
const bodyParser = require("body-parser");
const app = express(); 

app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000, function() {
  console.log("I am listening on port 3000")
});

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res) {
  let num1 = Number(req.body.n1); 
  let num2 = Number(req.body.n2);

  let sum = num1 + num2;

  res.send("The sum is " + sum);
})

app.get("/bmicalculator", function(req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html")
})

app.post("/bmicalculator", function(req, res) {
  let weight = Number(req.body.weight);
  let height = Number(req.body.height);
  let bmi = (weight/(height * height)) * 703
  res.send("Your bmi is " + bmi);
})

// 7. Inside server.js , create 2 variables, one for weight and one for height. 

// 8. Use the BMI calculator code you wrote previously, or write some new code to calculate and send back the result as text. It should read something like "Your BMI is n" where n is equal to the calculated BMI based on their weight and height inputs.

// A person who weighs 180 pounds and is 5 feet 8 inches tall has a BMI of 27.4. That's 180 divided by 68 times 68, multiplied by 703.


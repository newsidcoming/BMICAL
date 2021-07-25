const express = require('express');
const bodyparser = require('body-parser');
const app = express();
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get('/',(req,res) =>{
    res.sendFile(__dirname + "/index.html");
})
app.post('/', (req,res) =>{
    let height = req.body.Height;
    let weight = req.body.Weight;
    let height2 = height / 100;
    let bmi = (weight / Math.pow(height2, 2)).toFixed(2);
    //res.send("your bmi is " + bmi + " kg/m^2");
    
    let bmiCategory;
    let healthRisk;
    if(bmi < 18.4){
        bmiCategory = "Underweight";
        healthRisk = "Malnutrition Risk";
    } else if(bmi >= 18.5 && bmi <= 24.9){
        bmiCategory = "Normal Weight";
        healthRisk = "Low Risk";
    } else if(bmi >= 25 && bmi <= 29.9){
        bmiCategory = "Overweight";
        healthRisk = "Enhanced Risk";
    } else if(bmi >= 30 && bmi <= 34.9){
        bmiCategory = "Moderately Obese";
        healthRisk = "Medium Risk";
    } else if(bmi >= 35 && bmi <= 39.9){
        bmiCategory = "Severely Obese";
        healthRisk = "High Risk";
    } else {
        bmiCategory = "Very Severely Obese";
        healthRisk = "Very High Risk";
    }
    res.send("your bmi is " + bmi + " kg/m^2" + "\r\n Category : " + bmiCategory + "\r\n Health Risk : " + healthRisk);

})

app.listen(3000,(res) =>{
    console.log("server started at 3000 port")
})
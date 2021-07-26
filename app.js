function BMI(){
    var w=document.getElementById('w').value;
    var h=document.getElementById('h').value;
    var bmi=w/(h/100*h/100);
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
    res.send();
    document.getElementById("result").innerHTML="your bmi is " + bmi + " kg/m^2" + "\n Category : " + bmiCategory + "\n Health Risk : " + healthRisk;
    } 
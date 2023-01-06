let heightInput = document.querySelector(".height")
let weightInput = document.querySelector(".weight")
let calculateButton = document.querySelector(".calculate")
let result = document.querySelector(".result")
let statement = document.querySelector(".result-statement")
let age = document.querySelector(".age")


let BMI,height,weight

calculateButton.addEventListener("click",()=>{
    height=heightInput.value
    weight=weightInput.value
    BMI=weight/(height**2)
    result.innerText=BMI

    if(BMI<16){
        statement.innerText="Severe Thinness"
    }else if(BMI>=17){
        statement.innerText="Moderate Thinness"
    }else if(BMI>=18.5){
        statement.innerText="Mild Thinness"
    }else if(BMI>=25){
        statement.innerText="Normal"
    }else if(BMI>=30){
        statement.innerText="Overwight"
    }else if(BMI>=35){
        statement.innerText="Obese Class 1"
    }else if(BMI>=40){
        statement.innerText="Obese Class 2"
    }else{
        statement.innerText="Obese Class 3"
    }
})

let clear = document.querySelector(".clear").addEventListener("click",()=>{
    heightInput.value=""
    weightInput.value=""
    age.value=""
    result.value=""
    statement.value=""


})
function calculatebmi(){
    let Height=document.getElementById("Height")
    let Weight=document.getElementById("Weight")
    let result= Weight.value/(Height.value * Height.value);
    if (result < 18.5)
    {    
        document.getElementById("result").innerText="underweight"
    }
    else if(result > 18.5 && result < 24.9){
        document.getElementById("result").innerText="normal💪"
    }
    else if(result > 25 && result < 34.9){
        document.getElementById("result").innerText="obese"
    }
    else{
        document.getElementById("result").innerText="severe obese"
    }
}
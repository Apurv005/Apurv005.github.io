const calculateTemp = () =>{
    const tempNum = document.getElementById("tempNum").value;
    const convtName = document.getElementById("convtName");
    const span = document.getElementById("Output");

    const valueTemp = convtName.options[convtName.selectedIndex].value;

    const celsToFah = (tempNum) =>{
        return Math.round(((tempNum / 5) * 9) + 32);
    }
    const fahToCels = (tempNum) =>{
        return Math.round(((tempNum - 32) * 5) / 9);
    }

    let result;
    if(valueTemp == 'Celsius'){
        result = celsToFah(tempNum);
        span.innerHTML = `=${result}Fahrenhit`;
    }
    else{
        result = fahToCels(tempNum);
        span.innerHTML = `=${result}Celsius`;
    }
}
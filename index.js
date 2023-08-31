function convert() {
    let inputGrams = parseFloat(document.getElementById("num1").value);
    let selectedUnit = document.getElementById("unitSelect").value;

    let resultKg = inputGrams / 1000;
    let resultMg = inputGrams * 1000;
    let resultOz = inputGrams * 0.03527396;
    let resultCt = inputGrams * 5;

    document.getElementById("kgResult").textContent = (selectedUnit === "kg") ? resultKg.toFixed(4) : "";
    document.getElementById("mgResult").textContent = (selectedUnit === "mg") ? resultMg.toFixed(2) : "";
    document.getElementById("ozResult").textContent = (selectedUnit === "oz") ? resultOz.toFixed(4) : "";
    document.getElementById("ctResult").textContent = (selectedUnit === "ct") ? resultCt.toFixed(2) : "";
}

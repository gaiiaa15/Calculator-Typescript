interface CalculationParameters {
    panelCount: number;
    panelWattage: number;
    peakSunHours: number;
    electricityPriceGbpPerKwh: number;
}

const exampleCalculations: CalculationParameters = {
    panelCount:6,
    panelWattage:350,
    peakSunHours:4.5,
    electricityPriceGbpPerKwh:0.2611,

};

//checks if the value is an integer and minimum 4
function isValidPanelCount(value: number): boolean {
    return Number.isInteger(value) && value >=4;
}

//checks if panel wattage is an integer and is at least 300W
function isValidPanelWattage (value: number): boolean {
    return Number.isInteger(value) && value >= 300;
}

//checks if peak sun hours  is a valid number between 0 and 24 inclusive and allows decimals
function isValidPeakSunHours (value: number): boolean{
    return value >=0 && (value <=24);
}
// checks if the price value is greater than zero
function isValidElectricityPriceGbpPerKwh (value: number): boolean {
    return value > 0;
}

function isValidCalculations(input: CalculationParameters): boolean {
    return isValidPanelCount(input.panelCount) && isValidPanelWattage(input.panelWattage) && isValidPeakSunHours(input.peakSunHours) && isValidElectricityPriceGbpPerKwh(input.electricityPriceGbpPerKwh);
}




// calculates the daily energy generated in kWh
function dailyEnergyGenerationInKwh
(input : CalculationParameters) : number{
  return (input.panelCount * input.panelWattage) * input.peakSunHours / 1000;

}

// calculates monthly energy generation in kWh
function monthlyEnergyGenerationInKwh(monthlyInput : CalculationParameters) : number{
    return dailyEnergyGenerationInKwh(monthlyInput) * 30;
}
// calculates the estimated monthly savings in GBP
function estimatedMonthlySavings (input : CalculationParameters) : number {
    return monthlyEnergyGenerationInKwh(input) * input.electricityPriceGbpPerKwh;
}
if (isValidCalculations(exampleCalculations)) {
    // prints daily energy calculation
    console.log(dailyEnergyGenerationInKwh(exampleCalculations) + " kWh");
//prints monthly energy  calculation
    console.log(monthlyEnergyGenerationInKwh( exampleCalculations ) + " kWh");
// prints the estimated monthly saving calculation in GBP
    console.log(estimatedMonthlySavings(exampleCalculations).toFixed(2)+ " GBP");
}else {
    console.log("invalid calculation parameters");
}


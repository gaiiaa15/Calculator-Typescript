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

// calculates the daily energy generated in kWh
function dailyEnergyGenerationInKwh
(input : CalculationParameters) : number{
  let dailyEnergy : number = 0;
  dailyEnergy = (input.panelCount * input.panelWattage) * input.peakSunHours / 1000;
  return dailyEnergy;

}

// calculates monthly energy generation in kWh
function monthlyEnergyGenerationInKwh(monthlyInput : CalculationParameters) : number{
    let monthlyEnergy: number = 0;
    monthlyEnergy = dailyEnergyGenerationInKwh(monthlyInput) * 30;
    return monthlyEnergy;
}
// prints daily energy calculation
console.log(dailyEnergyGenerationInKwh(exampleCalculations) + "kWh");
//prints monthly energy  calculation
console.log(monthlyEnergyGenerationInKwh( exampleCalculations ) + "kWh");

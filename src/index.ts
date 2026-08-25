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
console.log(dailyEnergyGenerationInKwh(exampleCalculations) + "kWh");

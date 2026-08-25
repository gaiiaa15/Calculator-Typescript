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
    electricityPriceGbpPerKwh:0.2611

};
console.log(exampleCalculations);

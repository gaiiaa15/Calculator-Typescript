import * as readline from 'node:readline/promises';


interface CalculationParameters {
    panelCount: number;
    panelWattage: number;
    peakSunHours: number;
    electricityPriceGbpPerKwh: number;
}


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
    return Number.isFinite(value) && value > 0;
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

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function runCalculator (){
    try {
        const panelCountAnswer: string = await rl.question("Enter the number of panels used by your system: ");
        const panelCount: number = Number(panelCountAnswer);
            if (!isValidPanelCount(panelCount)) {
            console.log("The panel number must be a whole number of at least 4.");
            return;

            }
        const panelWattageAnswer: string = await rl.question("Enter the system panel's wattage: ");
        const panelWattage: number = Number(panelWattageAnswer);
            if (!isValidPanelWattage(panelWattage)){
                console.log("The panel wattage must be a whole number of at least 300.")
                return;
            }
        const peakSunHoursAnswer: string = await rl.question("Enter the peak sun hours for the day: ");
        const peakSunHours: number = Number(peakSunHoursAnswer);
            if (peakSunHoursAnswer.trim() === "" || !isValidPeakSunHours(peakSunHours)) {
                console.log("The peak sun hours must be a number between 0 and 24 inclusive.")
                return;
            }
        const  electricityPriceGbpPerKwhAnswer: string = await rl.question("Enter the  electricity price in GBP: ");
        const   electricityPriceGbpPerKwh: number = Number(electricityPriceGbpPerKwhAnswer);
            if(!isValidElectricityPriceGbpPerKwh(electricityPriceGbpPerKwh)){
                console.log("The electricity price should be in pounds; for example 26.11p is 0.2611 GBP")
                return;
            }

        const userCalculations: CalculationParameters = {
            panelCount:panelCount,
            panelWattage: panelWattage,
            peakSunHours: peakSunHours,
            electricityPriceGbpPerKwh:electricityPriceGbpPerKwh,
        };
        if (isValidCalculations(userCalculations)) {
            // prints daily energy calculation
            console.log("Estimated Daily Generation: " + dailyEnergyGenerationInKwh (userCalculations).toFixed(2) + " kWh");
            //prints monthly energy  calculation
            console.log("Estimated Monthly Generation: " +monthlyEnergyGenerationInKwh( userCalculations ).toFixed(2) + " kWh");
            // prints the estimated monthly saving calculation in GBP
            console.log("Estimated Monthly Savings: " +estimatedMonthlySavings(userCalculations).toFixed(2)+ " GBP");
        }else {
            console.log("invalid calculation parameters");
        }
    } finally {
        rl.close();

    }
}

runCalculator();


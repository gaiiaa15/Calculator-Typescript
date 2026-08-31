# TypeScript Solar Calculator
A command-line TypeScript application that estimates the daily solar energy generation, monthly solar energy generation, and monthly energy savings
from user-provided system data.

The project was created to practice TypeScript interfaces, typed function parameters, input validations, and asynchronous terminal input 
and breaking calculations into reusable functions. 

## Features
1. Interactive command-line interface 
2. Typed solar-system data using a TypeScript interface
3. Validation for all user input 
4. Daily and monthly energy generation estimations 
5. Estimated monthly electricity savings
6. Clear error messages for invalid entries

## Prerequisites
- Node.js
- npm

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/gaiiaa15/Calculator-Typescript
   ```
2. Move into the project directory:
    ```bash
   cd Calculator-typescript
    ```
3. Install the dependencies:
   ```bash
   npm install
   ```
## How to Run
1. Compile the TypeScript source into JavaScript:
   ```bash
   npx tsc
   ```
2. Run the compiled program
    ```bash
   node dist/index.js
    ```
## Example

### Input
```text
Enter the number of panels used by your system: 6
Enter the system panel's wattage: 350
Enter the peak sun hours for the day: 4.5
Enter the electricity price in GBP per kWh: 0.2611
```
## Output
````text
Estimated Daily Generation: 9.45 kWh
Estimated Monthly Generation: 283.50 kWh
Estimated Monthly Savings: 74.02 GBP
````
## Technologies Used

- **TypeScript** — interfaces, typed variables, function parameters and return types
- **Node.js** — runs the compiled command-line application
- **Node.js Readline Promises API** — collects asynchronous terminal input
- **npm** — manages project dependencies and development packages
- **Git and GitHub** — version control and project hosting

## What I Learned

- How TypeScript interfaces describe the expected shape and types of an object
- How terminal input initially arrives as a string and must be converted before numerical calculations
- How to validate whole numbers, decimal values, ranges, blank input and non-finite values
- How guard clauses and early returns keep validation logic readable
- How to separate validation, calculation and user-interaction responsibilities
- Why TypeScript is compiled into JavaScript before the application runs in Node.js
- How to test boundary values and document the results

## Possible Future Improvements
- Ask users to retry an invalid value instead of ending the program
- Let users choose between daily, monthly and annual estimates
- Add automated unit tests
- Connect the calculation logic to a web or React Native interface


## Requirements
### User Entry Requirements
1. Number of solar panels. (number; decimals are invalid; minimum number 4)
2. Power rating of one panel. (a whole number of at least 300 W)
3. Average daily sunlight hours. (number, decimal accepted, between 0 and 24 inclusive)
4. Electricity price per kilowatt-hour. (A number greater than 0, entered in GBP per kWh; for example, 26.11p is entered as 0.2611.)

### Output Requirements
1. Daily Energy generation:
daily kWh = number of panels x panel wattage (W) x Peak Sun Hours / 1000 --> converts to kWh

2. Monthly Energy Generation:
monthly kWh = ((num of panels x panel wattage (W)) x peak sun hours) x 30 /1000
OR monthly kWh = daily kWh x 30 

3. Estimated Monthly financial savings:
   Monthly savings (GBP) = monthly generation (kWh) x electricity price (GBP per kWh)

## Input Validation
- Panel count must be a whole number and at least 4.
- Panel wattage must be a whole number and at least 300W.
- Peak sun hours may contain decimals and must be >= 0 & <=24.
- Electricity price per kWh may contain decimals and must be greater than 0.
- Calculations run only when every input is valid.

## Manual Test Results

| Field/Test | Input | Expected Result | Actual Result | Pass/Fail |
|---|---:|---|---|---|
| Complete valid example | 4 panels, 300W, 4.5 hours, £0.2611/kWh | Calculations displayed | Calculations displayed | Pass |
| Panel count below minimum | 3 | Validation fails | Validation fails | Pass |
| Decimal panel count | 4.5 | Validation fails | Validation fails | Pass |
| Panel wattage below minimum | 299 | Validation fails | Validation fails | Pass |
| Peak sun hours above maximum | 24.1 | Validation fails | Validation fails | Pass |
| Electricity price is zero | 0 | Validation fails | Validation fails | Pass |



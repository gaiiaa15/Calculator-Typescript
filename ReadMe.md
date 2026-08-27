# Solara Calculator 

## Requirements
### User Entry Requirements
1. Number of solar panels. (number, decimals are invalid minimum number 4)
2. Power rating of one panel. (number, decimal is accepted, minimum 300W)
3. Average daily sunlight hours. (number, decimal accepted, minimum >=0 & <=24)
4. Electricity price per kilowatt-hour. (number, decimal accepted, 26.11 p/kwh)

### Output Requirements
1. Daily Energy generation:
daily kwh = number of panels * panel wattage (W) * Peak Sun Hours / 1000 --> converts to kWh

2. Monthly Energy Generation:
monthly kwh = ((num of panels * panel wattage (W)) * peak sun hoours) *30 /1000
OR monthly kWh = daily kWh * 30 

3. Estimated Monthly financial savings:
monthly savings GBP = monthly kWh * 0.2611

## Manual Test Results

| Field/Test | Input | Expected Result | Actual Result | Pass/Fail |
|---|---:|---|---|---|
| Complete valid example | 4 panels, 300W, 4.5 hours, £0.2611/kWh | Calculations displayed | Calculations displayed | Pass |
| Panel count below minimum | 3 | Validation fails | Validation fails | Pass |
| Decimal panel count | 4.5 | Validation fails | Validation fails | Pass |
| Panel wattage below minimum | 299 | Validation fails | Validation fails | Pass |
| Peak sun hours above maximum | 24.1 | Validation fails | Validation fails | Pass |
| Electricity price is zero | 0 | Validation fails | Validation fails | Pass |



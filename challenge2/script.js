const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line

/* The problems 
- The tax is a string so we need to change it into a number
- Secondly the tax is a constant so we cannot modify it directly
*/

// Created this balance so that it can be accessed globally
let balance = 0;

if ((minuteOfDay !== null) && (hourOfDay == 0) && (minuteOfDay == 0)) {
  // Extracting the 8 from the string through slicing, and converting that into a number
  let newTax = parseInt(tax.slice(0, 1)) 
  // Presenting the newTax as a decimal
	const taxAsDecimal = newTax / 100 // 0.08
  // Finding the tax amount from the salary
  const taxAmount = salary * taxAsDecimal // 64
  // Subtracting the taxAmount from the salary
  const salaryAfterTax = salary - taxAmount; // 736
  // Subtracting all the expenses from the salary and modifying the balance
	balance = salaryAfterTax - transport - food - rent // 274.00000000
}

// Change the 3 to a 2, since we need to convert into two decimal places
console.log(balance.toFixed(2))

const rent = 400;
const tax = '12%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line

if (typeof hourOfDay !== 'undefined' && typeof minuteOfDay !== 'undefined' && hourOfDay === 0 && minuteOfDay === 0) {
  const taxAsDecimal = parseInt(tax) / 100;
  const startingAfterTax = salary * (1 - taxAsDecimal);
  const balance = startingAfterTax - transport - food - rent;
  console.log('R' + balance.toFixed(2));
}

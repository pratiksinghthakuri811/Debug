//question no 1 Smart Electricity Bill Calculator
const calculateBill = (units) => {
    let bill = 0;

    if (units <= 20) {
        bill = units * 5;
    }
    else if (units <= 50) {
        bill = (20 * 5) + (units - 20) * 7;
    }
    else {
        bill = (20 * 5) + (30 * 7) + (units - 50) * 10;
    }

    return bill + 50;
};

const displayBill = (name, units, callback) => {
let total = callback(units);

console.log("Customer:", name);
console.log("Units Consumed:", units);
console.log("Total Electricity Bill: Rs.", total);
};

displayBill("Ram", 65, calculateBill);


//question no 2 Student Result Processing System
const calculateAverage = (m1, m2, m3) => {
return (m1 + m2 + m3) / 3;
};

const getDivision = (average) => {
if (average >= 70) {
return "First Division";
}
else if (average >= 60) {
return "Second Division";
}
else if (average >= 50) {
return "Third Division";
}
else {
return "Fail";
}
};

const processResult = (name, m1, m2, m3, callback) => {
let average = calculateAverage(m1, m2, m3);
let division = callback(average);

console.log("Student:", name);
console.log("Average:", average);
console.log("Division:", division);
};

processResult("Sita", 75, 75, 75, getDivision);




///question no 3 Online Shopping Discount System
const calculateDiscount = (amount) => {
if (amount >= 5000) {
return 20;
}
else if (amount >= 3000) {
return 15;
}
else if (amount >= 1000) {
return 10;
}
else {
return 0;
    }
};

const calculateFinalPrice = (amount, discount) => {
    return amount - (amount * discount / 100);
};

const checkout = (customerName, amount, callback) => {
    let discount = calculateDiscount(amount);
    let finalPrice = callback(amount, discount);

    console.log("Customer:", customerName);
    console.log("Original Price: Rs.", amount);
    console.log("Discount:", discount + "%");
    console.log("Final Price: Rs.", finalPrice);
};

checkout("Nikesh", 6000, calculateFinalPrice);



//question no 4 Movie Ticket Booking System
const getTicketPrice = (age) => {
    if (age < 12) {
        return 150;
    }
    else if (age <= 17) {
        return 200;
    }
    else if (age <= 59) {
        return 300;
    }
    else {
        return 200;
    }
};

const calculateTotal = (price, quantity) => {
    return price * quantity;
};

const applyDiscount = (total, quantity) => {
    if (quantity >= 5) {
        return total - (total * 10 / 100);
    }
    else {
        return total;
    }
};

const bookTicket = (name, age, quantity, callback) => {
    let price = getTicketPrice(age);
    let total = calculateTotal(price, quantity);
    let finalAmount = callback(total, quantity);

    console.log("Customer:", name);
    console.log("Age:", age);
    console.log("Tickets:", quantity);
    console.log("Total Before Discount: Rs.", total);
    console.log("Discount: Rs.", total - finalAmount);
    console.log("Final Amount: Rs.", finalAmount);
};

bookTicket("Hari", 25, 5, applyDiscount);


//question no 5  Employee Salary Processing System
const calculateBonus = (salary) => {
    if (salary >= 40000) {
        return salary * 10 / 100;
    }
    else {
        return salary * 5 / 100;
    }
};

const calculateTax = (salary) => {
    return salary * 5 / 100;
};

const calculateNetSalary = (salary, bonusCallback, taxCallback) => {
    let bonus = bonusCallback(salary);
    let tax = taxCallback(salary);

    return salary + bonus - tax;
};

const generatePayslip = (name, salary, callback) => {
    let bonus = calculateBonus(salary);
    let tax = calculateTax(salary);
    let netSalary = callback(salary, calculateBonus, calculateTax);

    console.log("Employee:", name);
    console.log("Basic Salary: Rs.", salary);
    console.log("Bonus: Rs.", bonus);
    console.log("Tax: Rs.", tax);
    console.log("Net Salary: Rs.", netSalary);
};

generatePayslip("Ram", 50000, calculateNetSalary);



//question no 6 Food Delivery Charge Calculator
const calculateDelivery = (distance) => {
    if (distance <= 2) {
        return 30;
    }
    else {
        return 30 + (distance - 2) * 15;
    }
};

const checkFreeDelivery = (orderAmount) => {
    return orderAmount >= 1000;
};

const processOrder = (customer, distance, orderAmount, callback) => {
    let deliveryCharge = callback(distance, orderAmount);

    console.log("Customer:", customer);
    console.log("Order Amount: Rs.", orderAmount);
    console.log("Distance:", distance, "km");
    console.log("Delivery Charge: Rs.", deliveryCharge);
};

const getFinalDeliveryCharge = (distance, orderAmount) => {
    if (checkFreeDelivery(orderAmount)) {
        return 0;
    }
    else {
        return calculateDelivery(distance);
    }
};

processOrder("Shyam", 5, 800, getFinalDeliveryCharge);



//question no 7 ATM Withdrawal System
const validateWithdrawal = (amount, balance) => {
    if (amount <= 0) {
        return false;
    }
    else if (amount % 500 !== 0) {
        return false;
    }
    else if (amount + 25 > balance) {
        return false;
    }
    else {
        return true;
    }
};

const withdrawMoney = (amount, balance, callback) => {
    if (callback(amount, balance)) {
        balance = balance - amount - 25;

        console.log("Withdrawal Successful!");
        console.log("Transaction Fee: Rs. 25");
        console.log("Remaining Balance: Rs.", balance);
    }
    else {
        console.log("Withdrawal Failed!");
        console.log("Invalid amount or insufficient balance.");
        console.log("Remaining Balance: Rs.", balance);
    }
};

let accountBalance = 10000;
let withdrawalAmount = 3000;

console.log("Account Balance: Rs.", accountBalance);
console.log("Withdrawal Amount: Rs.", withdrawalAmount);

withdrawMoney(withdrawalAmount, accountBalance, validateWithdrawal);



//question no 8 Restaurant Order Management System
const getFoodPrice = (foodName) => {
    if (foodName === "Burger") {
        return 250;
    }
    else if (foodName === "Pizza") {
        return 500;
    }
    else if (foodName === "Momo") {
        return 150;
    }
    else if (foodName === "Chowmein") {
        return 180;
    }
    else {
        return 0;
    }
};

const calculateServiceCharge = (total) => {
    return total * 5 / 100;
};

const calculateOrder = (foodName, quantity, callback) => {
    let price = getFoodPrice(foodName);

    if (price === 0) {
        return 0;
    }

    return callback(price, quantity);
};

const generateReceipt = (customerName, foodName, quantity, callback) => {
    let foodAmount = calculateOrder(foodName, quantity,
        (price, quantity) => price * quantity);

    if (foodAmount === 0) {
        console.log("Invalid food item!");
        return;
    }

    let serviceCharge = calculateServiceCharge(foodAmount);
    let finalAmount = foodAmount + serviceCharge;

    console.log("Customer:", customerName);
    console.log("Food:", foodName);
    console.log("Quantity:", quantity);
    console.log("Food Amount: Rs.", foodAmount);
    console.log("Service Charge: Rs.", serviceCharge);
    console.log("Final Amount: Rs.", finalAmount);
};

generateReceipt("Suman", "Burger", 2, calculateOrder);



//question no 9 Mobile Recharge System
const calculateBonus = (amount) => {
    if (amount >= 1000) {
        return amount * 15 / 100;
    }
    else if (amount >= 500) {
        return amount * 10 / 100;
    }
    else if (amount >= 100) {
        return amount * 5 / 100;
    }
    else {
        return 0;
    }
};

const calculateTotalBalance = (amount, bonus) => {
    return amount + bonus;
};

const recharge = (number, amount, callback) => {
    let bonus = calculateBonus(amount);
    let totalBalance = callback(amount, bonus);

    console.log("Mobile Number:", number);
    console.log("Recharge Amount: Rs.", amount);
    console.log("Bonus Received: Rs.", bonus);
    console.log("Total Balance: Rs.", totalBalance);
};

recharge("9800000000", 1000, calculateTotalBalance);



//question no 10 Smart Function Based Calculator
const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    else {
        return a / b;
    }
};

const calculate = (a, b, operationCallback) => {
    return operationCallback(a, b);
};

console.log("Addition:", calculate(20, 10, add));
console.log("Subtraction:", calculate(20, 10, subtract));
console.log("Multiplication:", calculate(20, 10, multiply));
console.log("Division:", calculate(20, 10, divide));




# JS-ASSESSMENT
This repository contains JavaScript real-life based questions aimed to apply async functions, and understand JavaScript syntax

## QUESTION 1
Create a CustomerOrder class with properties: orderId (string), items (array of objects with name,quantity, price), and status (string). Add a method calculateTotal() that returns the total order amount. Write an async method processPayment() that simulates payment with a Promise that resolves after 2 seconds. After calling the method, change the status to "paid" and print a success message.

**Pseudocode**
Input: Class with an Object as a parameter
Output:String

Step 1: Create a class called CustomerOrder with properties (orderId:String, items:Array of Objects (name:String, quantity:Number, price:Number) and status:String)

Step 2: Create a method called calculateTotal()

Step3: Inside a method calculateTotal() initialise a variable total= 0

Step4: Iterate in the items array, then for each item in the array,  multiply the item price and the item quantity, then sum up the output to get the totalOrderAmount. Return the totalOrderAmount.

Step5: Create async function processPayment(),
Step6: Simulate payment processing with a promise that resolves after  2 seconds
Step 7: wait for 2 seconds then update the order status to paid. Where status=paid
Step8:print payment processed successfully.

## QUESTION 2
Create a TeamMember class that takes name, role, and an array of tasks (each task is an object with title and completed boolean). Write a prototype method completeTask(taskTitle) that marks a task as completed. Write another method checkProgress() that returns a Promise resolving to "All tasks completed!" or rejecting with "Pending tasks remaining" based on the state of the tasks array.

**Pseudocode**

Input: A class with an Object as a parameter
Output:String

Step 1:Create a class called TeamMember with the following attributes(name:string, role:string, and task:array of objects with (title:string, and completedTask:Boolean))
Step 2: create a function completeTask() with the parameter taskTitle
STep 3: For each task in tasks if taskTitle == true, break
Step 4: create a function checkProgress()
Step 5: create a variable allCompleted which is equal to true
Step 5: If task.completed = false, then allCompleted = false, then break
Step 6: If all completed is true, return a promise that resolves to “All tasks completed!”
Else return “a promise that rejects with “pending tasks remaining”


## QUESTION 3
Build a Candidate class with properties: name, position, and interviews (array of objects with date, status). Add a method scheduleInterview(date) that pushes a new interview with status "pending". Then write an async function sendConfirmation() that returns a Promise that resolves after 1 second with a message "Interview confirmed with [name]", and log the message.

**Pseudocode**
Input: A class with Object as parameters
Output: String

Step1: Create a class Candidate with attributes (name, position and interviews(array of objects))
Step2: Create a method scheduleInterview that takes date as a parameter
Step 3: create newInterview object, 
newInterview.date = date
newInterview.status = “pending
then push newInterview to interviews array
Step4: create async function sendConfirmation()
Step5: return a promise that resolves after 1 second



## QUESTION 4
Design a Course class with properties: title, instructor, and students (array of student objects with name and progress). Add a method updateProgress(studentName, value) that modifies the student’s progress. Create an async method generateCertificate(studentName) that returns a Promise resolving only if the progress is 100, otherwise reject with "Incomplete progress".

## QUESTION 5
Create a StockTracker class with a property watchlist (array of objects with symbol, threshold, currentPrice). Add a method updatePrice(symbol, newPrice) that updates the stock’s current price. Write an async method checkAlerts() that loops through the watchlist and returns a Promise resolving with a list of stocks where currentPrice >= threshold, or rejecting with "No alerts triggered".


